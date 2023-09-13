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

import "./Dashboard.css";
import CardContainer from "../CardContainer";
import _mockCardLists from "./_mockCardLists.json";
import _mockChartData from "./_mockChartData.json";

const Dashboard = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const averageInterviewScore = "74/100";
  const skillGapRate = "23%";
  return (
    <div className="body flex-grow-1">
      <div className="container-lg">
        <div className="row">
          {/* Card section */}
          <div className="col-lg-9 d-flex flex-wrap">
            {_mockCardLists.length ? (
              <CardContainer cardLists={_mockCardLists} />
            ) : null}
          </div>
          {/* Average Interview Score and Skill Gap Rate Card */}
          <div className="col-lg-3">
            <div className="card bg-white mb-3">
              <div className="card-body" style={{ height: "155px" }}>
                <div>
                  <span className="fs-5 fw-normal">
                    Average Interview Score :{" "}
                  </span>
                  <span className="fs-5 fw-semibold">
                    {averageInterviewScore}
                  </span>
                </div>
                <div className="mt-2">
                  <span className="fs-5 fw-normal">Skill Gap Rate : </span>
                  <span className="fs-5 fw-semibold">{skillGapRate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Chart section */}
          <div className="col-lg-4">
            {/* Department wise Participation */}
            <div className="card bg-white mb-3">
              <div className="card-header bg-white">
                <span className="fs-6 fw-normal">
                  Department wise Participation
                </span>
              </div>
              <div className="card-body">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={_mockChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Department wise Improvement Rate */}
            <div className="card bg-white mb-3">
              <div className="card-header bg-white">
                <span className="fs-6 fw-normal">
                  Department wise Improvement Rate
                </span>
              </div>
              <div className="card-body">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={_mockChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="basic" dataKey="pv" stroke="#8884d8" />
                    <Line type="basic" dataKey="uv" stroke="red" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Critical Improvement Areas */}
            <div className="card bg-white mb-3">
              <div className="card-header bg-white">
                <span className="fs-6 fw-normal">
                  Critical Improvement Areas
                </span>
              </div>
              <div className="card-body">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    {/* Place the legend horizontally at the bottom */}
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="center"
                    />
                    <Pie
                      dataKey="value"
                      data={[
                        { name: "Group A", value: 400 },
                        { name: "Group B", value: 300 },
                        { name: "Group C", value: 300 },
                        { name: "Group D", value: 200 },
                      ]}
                      cx="50%"
                      cy="40%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
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
