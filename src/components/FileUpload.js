import React, { useState } from "react";
import { useExcel } from "../context/ExcelContext";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { handleFileUpload } = useExcel();

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      handleFileUpload(selectedFile);
      setSelectedFile(null); // Reset file input
    }
  };

  return (
    <div>
      <h2>Upload Excel File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".xlsx, .xls" onChange={handleChange} />
        <button type="submit" disabled={!selectedFile}>Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;
