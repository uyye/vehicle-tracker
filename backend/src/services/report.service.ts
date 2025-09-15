import VehicleService from "./vehicle.service";
import ExcelJS from "exceljs";

class ReportService {
  static async excelReport(vehicleId: number, date: string) {
    const trips = await VehicleService.vehicleDatail(vehicleId, date);

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Trips Report");

    // === Judul ===
    sheet.mergeCells("A1:D1");
    const title = sheet.getCell("A1");
    title.value = `LAPORAN PERJALANAN KENDARAAN ${vehicleId} (${date})`;
    title.font = { size: 14, bold: true };
    title.alignment = { vertical: "middle", horizontal: "center" };

    sheet.addRow([]); // baris kosong (row 2)

    // === Header manual di row 3 ===
    // Tambahkan baris data terlebih dahulu tanpa format
    const headerRow = sheet.addRow([
      "Trip ID",
      "Start Time",
      "End Time",
      "Status",
    ]);

    // Tentukan sel-sel yang ingin diformat
    const cellA3 = sheet.getCell("A3");
    const cellB3 = sheet.getCell("B3");
    const cellC3 = sheet.getCell("C3");
    const cellD3 = sheet.getCell("D3");

    // Buat array dari sel-sel yang akan diformat
    const headerCells = [cellA3, cellB3, cellC3, cellD3];

    // Iterasi untuk menerapkan format ke setiap sel secara terpisah
    headerCells.forEach((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "808080" },
      };
      cell.alignment = { horizontal: "center", vertical: "middle" };
    });

    // Atur lebar kolom
    sheet.columns = [
      { width: 10 },
      { width: 25 },
      { width: 25 },
      { width: 18 },
    ];

    // === Data mulai row 4 ===
    trips.Trips.forEach((trip: any) => {
      sheet.addRow([
        trip.id,
        new Date(trip.start_time).toLocaleString(),
        new Date(trip.end_time).toLocaleString(),
        trip.status,
      ]);
    });

    // Border untuk semua cell isi
    sheet.eachRow((row, rowNumber) => {
      if (rowNumber >= 3) {
        row.eachCell((cell) => {
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };
        });
      }
    });

    // === Total Trip ===
    sheet.addRow([]);

    console.log(trips.Trips.length, "CEK CEK");

    const totalRow = sheet.addRow([`TOTAL TRIP: ${trips.Trips.length}`]);
    sheet.mergeCells(`A${totalRow.number}:D${totalRow.number}`);
    totalRow.font = { bold: true };
    totalRow.alignment = { horizontal: "center" };

    return workbook;
  }
}

export default ReportService;
