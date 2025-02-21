import React from "react";
import { useExcel } from "../context/ExcelContext";

function ExcelDataList() {
  const { excelData } = useExcel();

  return (
    <div>
      <h2>Excel Data</h2>
      {excelData.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              {Object.keys(excelData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {excelData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExcelDataList;
