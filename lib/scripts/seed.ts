import XLSX from "xlsx";
//Läs in filen
const workbook = XLSX.readFile("LivsmedelsDB.xlsx");

// Hämta första bladet
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Konvertera till JSON
const data = XLSX.utils.sheet_to_json(sheet, { range: 1 });
const headers = data[0];

data.shift();

const parsedData = data.map(livsmedel => {
  let temp = {};

  for (const key in livsmedel) {
    const col = headers[key].toLowerCase();
    const val = livsmedel[key];

    console.log(`${col} : ${val}`);

    temp[col] = val;
  }

  return temp;
});

console.log(parsedData[0], parsedData[1]);
