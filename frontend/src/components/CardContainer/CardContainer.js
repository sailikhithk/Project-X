import React from "react";
import MockIcon from "../../images/login.jpg";
import "./CardContainer.css";

const CardContainer = ({ cardLists = [], className = "" }) => {
  return cardLists.map((cardItem, index) => {
    const { cardContent = "", cardValue = "" } = cardItem;
    return (
      <div className={`col-sm-6 col-lg-4 ${className}`} key={index}>
        <div className={`mb-3 ${index !== 0 ? "ms-4" : ""}`}>
          <div className="dashboard-card-body">
            <div>
              <img
                src={MockIcon}
                className="img-fluid"
                style={{ height: "25px" }}
                alt="Card Icon"
              />
            </div>
            <div
              title={cardContent}
              className="content-container"
            >
              <span className="text text-white fs-6 fw-normal" >{cardContent}</span>
            </div>
            <div>
              <span className="text  text-white fs-2 fw-semibold ">{cardValue}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CardContainer;
