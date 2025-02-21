import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchExcelData, uploadExcel } from "../services/api";

const ExcelContext = createContext();

export function ExcelProvider({ children }) {
  const [excelData, setExcelData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    async function loadExcelData() {
      const data = await fetchExcelData();
      setExcelData(data);
    }
    loadExcelData();
  }, []);

  // Function to upload Excel file and refresh data
  const handleFileUpload = async (file) => {
    const uploadedData = await uploadExcel(file);
    if (uploadedData) {
      setExcelData(uploadedData); // Update state with new data
    }
  };

  return (
    <ExcelContext.Provider value={{ excelData, handleFileUpload }}>
      {children}
    </ExcelContext.Provider>
  );
}

export function useExcel() {
  return useContext(ExcelContext);
}
