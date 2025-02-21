import React from "react";
import { ExcelProvider } from "./context/ExcelContext";
import ExcelPage from "./pages/ExcelPage";

function App() {
  return (
    <ExcelProvider>
      <ExcelPage />
    </ExcelProvider>
  );
}

export default App;
