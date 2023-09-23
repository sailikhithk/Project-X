import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const ActionButtonCellRenderer = (props) => {
  const { deleteHandler = () => {} } = props;

  return (
    <div>
      <DeleteIcon style={{cursor: 'pointer'}} onClick={() => deleteHandler(props)}
      />
    </div>
  );
};

export default ActionButtonCellRenderer;
