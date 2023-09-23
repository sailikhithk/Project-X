import React, { useState, useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import _mockColumnData from "./_mockColumnData.json";
import _mockStudentData from "./_mockStudentData.json";

import ActionButtonCellRenderer from "./ActionButtonCellRenderer";
import './Students.css';
import FilterComponent from "../Filter/Filter";
import FilterIconBlack from '../../images/filter-black.png';

const Students = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "90%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);

  const [selectedValue, setSelectedValue] = useState("");
  const [options, setOptions] = useState([
    "All Branches",
    "Branch1",
    "Branch2",
  ]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const deleteHandler = (act) => {
    const { data = {} } = act;
    const { id } = data;
    console.log("id :", id);
    // NEED TO DO API CALL BASED ON ID AND UPDATE ROWDATA
  };

  const onGridReady = () => {
    // NEED TO DO STUDENT LISTS API CALL AND UPDATE STATE HERE
    setColumnDefs([
      ..._mockColumnData,
      {
        headerName: "Actions",
        field: "actions",
        cellRenderer: ActionButtonCellRenderer,
        cellRendererParams: { deleteHandler },
        flex: 1,
      },
    ]);
    setRowData(_mockStudentData);
  };

  const getRowHeight = useCallback(() => {
    return 45;
  }, []);

  return (
    <div className="flex-grow-1 px-3" style={containerStyle}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span className="fs-5 fw-medium text mb-4 mt-4" style={{color: '#5271FF'}}>
          Students 
        </span>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap:'10px'}}>
        <FilterComponent
              icon={FilterIconBlack}
              color={"black"}
              handleSelectChange={handleSelectChange}
              selectedValue={selectedValue}
              options={options}
            />
           <FilterComponent
              icon={FilterIconBlack}
              color={"black"}
              handleSelectChange={handleSelectChange}
              selectedValue={selectedValue}
              options={options}
            />
        </div>
      </div>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact // resizable, sortable
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          getRowHeight={getRowHeight}
          domLayout={'autoHeight'}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default Students;
