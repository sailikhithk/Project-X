import React, { useState } from "react";
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
  Label,
} from "recharts";

import "./Dashboard.css";
import CardContainer from "../CardContainer";
import _mockCardLists from "./_mockCardLists.json";
import _mockChartData from "./_mockChartData.json";
import FilterIcon from "../../images/filter.png";
import SelectComponent from "../Select/Select";
import FilterComponent from "../Filter/Filter";

const Dashboard = () => {
  const COLORS = ["#6CE5E8", "#5271FF", "#005B82", "#00B4EC"];
  const averageInterviewScore = "74/100";
  const skillGapRate = "23%";
  const [selectedValue, setSelectedValue] = useState("");
  const [options, setOptions] = useState([
    "All Branches",
    "Branch1",
    "Branch2",
  ]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const legendFormatter = (value, entry, type) => {
    return (
      <div
        className={
          type === "line"
            ? "circular-legend-item circular-legend-item-line"
            : "circular-legend-item"
        }
      >
        <div
          className={
            type === "line"
              ? "circular-legend-color-line"
              : "circular-legend-color"
          }
          style={{ backgroundColor: entry.color }}
        />
        <div className="circular-legend-text">{value}</div>
      </div>
    );
  };

  return (
    <div className="body flex-grow-1 mt-5" style={{ background: "#fff" }}>
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
            <FilterComponent
              icon={FilterIcon}
              color={"#FF1616"}
              handleSelectChange={handleSelectChange}
              selectedValue={selectedValue}
              options={options}
            />
            <div className=" bg-white mb-3">
              <div className="" style={{ height: "155px" }}>
                <div>
                  <span
                    className="fs-5 fw-normal text"
                    style={{ color: "#545454", display: "block" }}
                  >
                    Average Interview Score
                  </span>
                  <span
                    className="fs-2 fw-normal text"
                    style={{ color: "#5271FF" }}
                  >
                    {averageInterviewScore}
                  </span>
                </div>
                <div className="mt-2">
                  <span
                    className="fs-5 fw-normal text"
                    style={{ color: "#545454", display: "block" }}
                  >
                    Skill Gap Rate
                  </span>
                  <span
                    className="fs-2 fw-normal text"
                    style={{ color: "#5271FF" }}
                  >
                    {skillGapRate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {/* Chart section */}
          <div className="col-lg-4">
            {/* Department wise Participation */}
            <div className="mb-3">
              <div className="card-header horizontal-center">
                <span
                  className="fs-6 fw-medium text  text-center"
                  style={{ color: "#545454" }}
                >
                  Department wise Participation
                </span>
              </div>
              <div className="mt-4">
                <ResponsiveContainer width="100%" height={430}>
                  <BarChart data={_mockChartData} width={"200px"}>
                    <CartesianGrid vertical={false} strokeDasharray="0 0" />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      className="text axis-data"
                      interval={0}
                    >
                      <Label
                        className="text"
                        value="DEPARTMENT"
                        position="bottom"
                        dy={10} // Adjust the distance from the X-axis
                      />
                    </XAxis>
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      className="text axis-data"
                      interval={0}
                    >
                      <Label
                        className="text"
                        value="PARTICIPATION RATE"
                        position="middle"
                        angle={-90} // Rotate the label for vertical orientation
                        dx={-25} // Adjust the distance from the Y-axis
                      />
                    </YAxis>
                    <Tooltip />
                    <Legend
                      formatter={(value, entry) =>
                        legendFormatter(value, entry, "line")
                      }
                      align="center"
                      verticalAlign="bottom"
                      layout="vertical"
                      iconSize={0}
                      wrapperStyle={{
                        position: "relative",
                        top: "-60px",
                        width: "150px",
                        left: "50px",
                      }}
                    />
                    <Bar
                      dataKey="pv"
                      stackId={"a"}
                      fill="#6CE5E8"
                      barSize={60}
                    />
                    <Bar
                      dataKey="uv"
                      stackId={"a"}
                      fill="#5271FF"
                      barSize={60}
                      radius={[15, 15, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Department wise Improvement Rate */}
            <div className=" bg-white mb-3">
              <div className="card-header bg-white horizontal-center">
                <span
                  className="fs-6 fw-medium text  text-center"
                  style={{ color: "#545454" }}
                >
                  Department wise Improvement Rate
                </span>
              </div>
              <div className="mt-4">
                <ResponsiveContainer width="100%" height={430}>
                  <LineChart data={_mockChartData}>
                    <CartesianGrid
                      vertical={false}
                      horizontal={false}
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
                        value="WEEK"
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
                        value="INTERVIEW SCORE"
                        position="middle"
                        angle={-90} // Rotate the label for vertical orientation
                        dx={-30} // Adjust the distance from the Y-axis
                      />
                    </YAxis>
                    <Tooltip />
                    <Legend
                      formatter={(value, entry) =>
                        legendFormatter(value, entry, "line")
                      }
                      align="center"
                      verticalAlign="bottom"
                      layout="vertical"
                      iconSize={0}
                      wrapperStyle={{
                        position: "relative",
                        top: "-60px",
                        width: "150px",
                        left: "50px",
                      }}
                    />
                    <Line
                      type="basic"
                      dataKey="pv"
                      stroke="#6CE5E8"
                      strokeWidth={4}
                    />
                    <Line
                      type="basic"
                      dataKey="uv"
                      stroke="#5271FF"
                      strokeWidth={4}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Critical Improvement Areas */}
            <div className="bg-white mb-3">
              <div className="card-header bg-white horizontal-center">
                <span
                  className="fs-6 fw-medium text  text-center"
                  style={{ color: "#545454" }}
                >
                  Critical Improvement Areas
                </span>
              </div>
              <div className="mt-4">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    {/* Place the legend horizontally at the bottom */}
                    <Legend
                      formatter={(value, entry) =>
                        legendFormatter(value, entry, "pie")
                      }
                      align="center"
                      verticalAlign="bottom"
                      layout="vertical"
                      iconSize={0}
                      wrapperStyle={{
                        position: "relative",
                        top: "-120px",
                        width: "150px",
                      }}
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
                      cy="60%"
                      innerRadius={50}
                      outerRadius={100}
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
