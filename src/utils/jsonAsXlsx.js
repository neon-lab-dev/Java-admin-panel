import * as XLSX from "xlsx";
export default function jsonToXlsx(data, name) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, `${name}.xlsx`);
}
