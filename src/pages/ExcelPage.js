import React from "react";
import FileUpload from "../components/FileUpload";
import ExcelDataList from "../components/ExcelDataList";

function ExcelPage() {
  return (
    <div>
      <h1>Excel File Upload & Data View</h1>
      <FileUpload />
      <ExcelDataList />
    </div>
  );
}

export default ExcelPage;
