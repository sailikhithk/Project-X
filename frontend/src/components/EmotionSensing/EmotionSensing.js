import React from "react";
import "./EmotionSensing.css";

import _mockChartData from "./_mockChartData.json";
import PositiveEmotionsChart from "./PositiveEmotionsChart";
import NeutralEmotionsChart from "./NeutralEmotionsChart";
import NegativeEmotionsChart from "./NegativeEmotionsChart";

const EmotionSensing = () => {
  return (
    <>
      <div className="body flex-grow-1">
        <div className="container-lg">
          <div className="row">
            {/** chart section */}
            <div className="col-sm-12 col-lg-12">
              <div className=" bg-white mb-3">
                <div className="bg-white">
                  <span
                    className="fs-5 fw-normal text"
                    style={{ color: "#00195A" }}
                  >
                    Emotion Sensing{" "}
                  </span>{" "}
                  <span
                    style={{
                      color: "545454",
                      textTransform: "uppercase",
                      fontSize: "10px",
                    }}
                  >
                    {" "}
                    Time wise emotions
                  </span>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-lg-5">
                    <PositiveEmotionsChart />
                  </div>
                  <div className="col-sm-12 col-lg-2"></div>
                  <div className="col-sm-12 col-lg-5">
                    <NeutralEmotionsChart />
                  </div>
                  <div className="col-sm-12 col-lg-3"></div>
                  <div className="col-sm-12 col-lg-6">
                    <NegativeEmotionsChart />
                  </div>
                  <div className="col-sm-12 col-lg-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmotionSensing;
