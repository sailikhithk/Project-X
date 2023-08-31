import React from "react";
import "./CardContainer.css";

const CardContainer = ({ cardLists = [] }) => {
  return cardLists.map((cardItem, index) => {
    const { cardContent = "", cardValue = "" } = cardItem;
    return (
      <div className="col-sm-6 col-lg-4" key={index}>
        <div className="card bg-white mb-3">
          <div className="card-body">
            <div>ICON</div>
            <div className="CardContainer-content fs-5 fw-normal mt-3">
              {cardContent}
            </div>
            <div className="CardContainer-value fs-4 fw-semibold mt-3">
              {cardValue}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CardContainer;
