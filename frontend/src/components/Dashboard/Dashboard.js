import React from "react";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
} from "recharts";

import CardContainer from "../CardContainer";

import _mockCardLists from "./_mockCardLists.json";
import _mockChartData from "./_mockChartData.json";

const Dashboard = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="body flex-grow-1 px-3">
      <div className="container-lg">
        <div className="row">
          {/** card section */}
          {_mockCardLists.length ? (
            <CardContainer cardLists={_mockCardLists} />
          ) : null}
          {/** chart section */}
          <div className="col-sm-6 col-lg-4">
            <div className="card bg-white mb-3">
              <div className="card-header bg-white">
                <span className="fs-6 fw-normal">
                  Department wise Participation
                </span>
              </div>
              <div className="card-body">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={_mockChartData}
                    margin={{
                      top: 20,
                      right: 10,
                      left: 5,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card bg-white mb-3">
              <div className="card-header bg-white">
                <span className="fs-6 fw-normal">
                  Department wise Improvement Rate
                </span>
              </div>
              <div className="card-body">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart
                    data={_mockChartData}
                    margin={{
                      top: 20,
                      right: 10,
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
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="basic" dataKey="uv" stroke="red" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card bg-white mb-3">
              <div className="card-header bg-white">
                <span className="fs-6 fw-normal"></span>Critical Improvement
                areas
              </div>
              <div className="card-body">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                    />
                    <Pie
                      align="center"
                      data={[
                        { name: "Group A", value: 400 },
                        { name: "Group B", value: 300 },
                        { name: "Group C", value: 300 },
                        { name: "Group D", value: 200 },
                      ]}
                      cx={100}
                      cy={200}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {_mockChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
