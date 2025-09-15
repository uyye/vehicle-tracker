import { Request, Response, NextFunction } from "express";
import ReportService from "../services/report.service";

class ReportController {
  static async excelReport(req: Request, res: Response, next: NextFunction) {
    try {
      const { vehicleId, date } = req.query;
      const workbook = await ReportService.excelReport(
        Number(vehicleId),
        date as string
      );

      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader(
        "Content-Disposition",
        `attachment; filename=report-${vehicleId}-${date}.xlsx`
      );

      await workbook.xlsx.write(res);
      res.end();
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

export default ReportController;
