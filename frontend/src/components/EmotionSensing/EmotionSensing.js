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
  Label
} from "recharts";
import "./EmotionSensing.css";

import _mockChartData from "./_mockChartData.json";

const EmotionSensing = () => {
  const legendFormatter = (value, entry) => {
    return (
      <div
        className={"line-legend-item"}>
        <div
          className={"line-legend-color"}
          style={{ backgroundColor: entry.color }}
        />
        <div className="line-legend-text">{value}</div>
      </div>
    );
  };
  return (
    <div className="body flex-grow-1">
      <div className="container-lg">
        <div className="row">
          {/** chart section */}
          <div className="col-sm-12 col-lg-12">
            <div className=" bg-white mb-3">
              <div className="bg-white">
                <span className="fs-5 fw-normal text" style={{color: '#00195A'}}>
                  Emotion Sensing </span> <span style={{color: '545454', textTransform: 'uppercase', fontSize: '10px'}}> Time wise emotions</span> 
              </div>
              <div className="mt-5 pt-3">
                <ResponsiveContainer width="100%" height={480}>
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
                      strokeDasharray="0 0"/>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false}
                      tickLine={false}
                      className="text axis-data"
                      interval={0}
                      dy={10}
                      dx={20} >
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
                      dx={-5} >
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
                        formatter={(value, entry) =>
                        legendFormatter(value, entry)
                      }
                      layout="horizontal"
                      iconSize={0}
                      wrapperStyle={{
                        width: "95%",
                        left: '50px',
                        marginBottom: '20px',
                        top: '-50px'
                      }}/>
                    <Line
                      type="basic"
                      dataKey="surprise"
                      stroke="#AFDFEF"
                      strokeWidth={4}
                    />
                    <Line
                      type="basic"
                      dataKey="disgust"
                      stroke="#E1885E"
                      strokeWidth={4}
                    />
                    <Line
                      type="basic"
                      dataKey="contempt"
                      stroke="#6B2F6B"
                      strokeWidth={4}
                    />
                    <Line
                      type="basic"
                      dataKey="happiness"
                      stroke="#9F9A8F"
                      strokeWidth={4}
                    />
                    <Line
                      type="basic"
                      dataKey="sadnesss"
                      stroke="#669548"
                      strokeWidth={4}
                    />
                    <Line
                      type="basic"
                      dataKey="anger"
                      stroke="#596EF2"
                      strokeWidth={4}
                    />
                    <Line
                      type="basic"
                      dataKey="fear"
                      stroke="#000000"
                      strokeWidth={4}
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
