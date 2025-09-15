'use strict';

import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
import process from "process";

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";

// ambil config dari backend/config/config.json
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(path.join(__dirname, "..", "..", "config", "config.json"))[env];

interface DbInterface {
  [key: string]: any;
  sequelize?: Sequelize;
  Sequelize?: typeof Sequelize;
}

const db: DbInterface = {};

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] as string, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// load semua model dari folder ini
fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      (file.slice(-3) === ".ts" || file.slice(-3) === ".js") &&
      file.indexOf(".test.") === -1
    );
  })
  .forEach((file: string) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const modelModule = require(path.join(__dirname, file));
    const model = modelModule.default.initModel(sequelize); // ✅ class-based init
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
