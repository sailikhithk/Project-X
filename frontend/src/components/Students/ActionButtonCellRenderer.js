import React from "react";
import DeleteIcon from "../../images/delete.png";

const ActionButtonCellRenderer = (props) => {
  const { deleteHandler = () => {} } = props;

  return (
    <div>
      <img
        src={DeleteIcon}
        className="delete-icon"
        onClick={() => deleteHandler(props)}
      />
    </div>
  );
};

export default ActionButtonCellRenderer;
