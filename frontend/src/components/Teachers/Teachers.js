import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import _mockColumnData from "./_mockColumnData.json";
import _mockTeacherData from "./_mockTeacherData.json";

const Teachers = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "90%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);

  const onGridReady = () => {
    // NEED TO DO STUDENT LISTS API CALL AND UPDATE STATE HERE
    setColumnDefs(_mockColumnData);
    setRowData(_mockTeacherData);
  };

  return (
    <div className="flex-grow-1 px-3" style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact // resizable, sortable
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default Teachers;
