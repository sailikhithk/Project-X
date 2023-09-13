import React from "react";
import MockIcon from "../../images/login.jpg";
import "./CardContainer.css";

const CardContainer = ({ cardLists = [], className = "" }) => {
  return cardLists.map((cardItem, index) => {
    const { cardContent = "", cardValue = "" } = cardItem;
    return (
      <div className={`col-sm-6 col-lg-4 ${className}`} key={index}>
        <div className={`card bg-primary mb-3 ${index !== 0 ? "ms-4" : ""}`}>
          <div className="card-body">
            <div>
              <img
                src={MockIcon}
                className="img-fluid"
                style={{ height: "25px" }}
                alt="Card Icon"
              />
            </div>
            <div
              className="fs-5 fw-normal text-truncate mt-3"
              title={cardContent}
            >
              <span className="text-white">{cardContent}</span>
            </div>
            <div className="fs-4 fw-semibold text-truncate mt-3">
              <span className="text-white">{cardValue}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CardContainer;
