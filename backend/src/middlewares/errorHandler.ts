import { Request, Response, NextFunction } from "express";

interface AppError extends Error {
  status?: number;
  errors?: { message: string }[];
}

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = "Internal server error";
  let status = 500;
  let errors: string[] | undefined
  switch (err.name) {
    case "BadRequest":
      status = Number(err.status);
      message = err.message;
      break;
    case "NotFound":
      status = Number(err.status);
      message = err.message;
      break;
    case "Unauthorized":
      status = Number(err.status);
      message = err.message;
      break;
    case "SequelizeValidationError":
      status = 400;
      message = 'Validation error';
      errors = err.errors?.map((e) => e.message);
      break;
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = "Duplicate value error";
      errors =  err.errors?.map((e) => e.message);
      break;

    default:
      break;
  }

  res.status(status).json({
    status,
    message,
    ...(errors && {errors})
  });
};

export default errorHandler;
