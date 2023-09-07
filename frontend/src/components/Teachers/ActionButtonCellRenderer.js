import React from "react";

const ActionButtonCellRenderer = (props) => {
  const { deleteHandler = () => {} } = props;

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => deleteHandler(props)}
      >
        Delete
      </button>
    </div>
  );
};

export default ActionButtonCellRenderer;
