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
  Label,
} from "recharts";
import "./EmotionSensing.css";

import _mockChartData from "./_mockChartData.json";
const NeutralEmotionsChart = () => {
    const legendFormatter = (value, entry) => {
      return (
        <div className={"line-legend-item"}>
          <div
            className={"line-legend-color"}
            style={{ backgroundColor: entry.color }}
          />
          <div className="line-legend-text">{value}</div>
        </div>
      );
    };
    return (
      <div
        className="mt-5 pt-3"
        style={{
          background: "#FFFAFA",
          borderRadius: "30px",
          paddingLeft: "10px",
        }}
      >
        <div
          className="fs-5 fw-bold text mb-4 pb-4"
          style={{ left: "30%", position: "relative", color: "#005B82" }}
        >
          Neutral Emotions
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={_mockChartData}
            margin={{
              top: 20,
              right: 50,
              left: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid
              vertical={false}
              horizontal={true}
              strokeDasharray="0 0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              className="text axis-data"
              interval={0}
              dy={10}
              dx={20}
            >
              <Label
                className="text"
                value="TIME"
                position="bottom"
                dy={20} // Adjust the distance from the X-axis
              />
            </XAxis>
            <YAxis
              axisLine={false}
              tickLine={false}
              className="text axis-data"
              dx={-5}
            >
              <Label
                className="text"
                value="EMOTIONS"
                position="middle"
                angle={-90} // Rotate the label for vertical orientation
                dx={-30} // Adjust the distance from the Y-axis
              />
            </YAxis>
            <Tooltip />
            <Legend
              formatter={(value, entry) => legendFormatter(value, entry)}
              layout="horizontal"
              iconSize={0}
              wrapperStyle={{
                width: "95%",
                marginBottom: "20px",
                top: "-50px",
              }}
            />
            <Line
              dataKey="surprise"
              stroke="#AFDFEF"
              strokeWidth={3}
              type="monotone"
              dot={{
                stroke: "#AFDFEF",
                strokeWidth: 4,
                r: 2,
                strokeDasharray: "",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  export default NeutralEmotionsChart