import axios from "axios";

// ✅ Base URL
const API_BASE_URL = "http://localhost:5000"; // Update this if needed

// ✅ Endpoints
const ENDPOINTS = {
  GET_EXCEL: "/get-excel-data", // Fetch Excel data
  UPLOAD_EXCEL: "/upload-excel", // Upload Excel file
};

// ✅ Function to GET Data
export const fetchExcelData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}${ENDPOINTS.GET_EXCEL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Excel data:", error);
    return [];
  }
};

// ✅ Function to POST (Upload Excel File)
export const uploadExcel = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file); // Send file as form data

    const response = await axios.post(`${API_BASE_URL}${ENDPOINTS.UPLOAD_EXCEL}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    console.error("Error uploading Excel file:", error);
    return null;
  }
};
