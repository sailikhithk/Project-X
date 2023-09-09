import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import _mockChartData from "./_mockChartData.json";

const EmotionSensing = () => {
  return (
    <div className="body flex-grow-1 px-3">
      <div className="container-lg">
        <div className="row">
          {/** chart section */}
          <div className="col-sm-12 col-lg-12">
            <div className="card bg-white mb-3">
              <div className="card-header bg-white">
                <span className="fs-6 fw-normal">
                  Emotion Sensing - Time wise emotions
                </span>
              </div>
              <div className="card-body">
                <ResponsiveContainer width="100%" height={520}>
                  <LineChart
                    data={_mockChartData}
                    margin={{
                      top: 20,
                      right: 50,
                      left: 5,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="basic"
                      dataKey="surprise"
                      stroke="#AFDFEF"
                      strokeWidth={2}
                    />
                    <Line
                      type="basic"
                      dataKey="disgust"
                      stroke="#E1885E"
                      strokeWidth={2}
                    />
                    <Line
                      type="basic"
                      dataKey="contempt"
                      stroke="#6B2F6B"
                      strokeWidth={2}
                    />
                    <Line
                      type="basic"
                      dataKey="happiness"
                      stroke="#9F9A8F"
                      strokeWidth={2}
                    />
                    <Line
                      type="basic"
                      dataKey="sadnesss"
                      stroke="#669548"
                      strokeWidth={2}
                    />
                    <Line
                      type="basic"
                      dataKey="anger"
                      stroke="#596EF2"
                      strokeWidth={2}
                    />
                    <Line
                      type="basic"
                      dataKey="fear"
                      stroke="#000000"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionSensing;
