import React from "react";

const Dashboard = () => {
  const cards = [
    {
      title: "Interviews Conducted",
      value: 2230,
      icon: "fas fa-user-tie",
    },
    {
      title: "Average Interview Score",
      value: 74,
      icon: "fas fa-chart-line",
    },
    {
      title: "Skill Gap Rate",
      value: 23,
      icon: "fas fa-exclamation-triangle",
    },
    {
      title: "Department Wise Participation",
      value: 650,
      icon: "fas fa-users",
    },
    {
      title: "Department Wise Improvement Rate",
      value: 5,
      icon: "fas fa-arrow-up",
    },
    {
      title: "Critical Improvement Areas",
      value: "Communication, Technical Skills",
      icon: "fas fa-exclamation-circle",
    },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="card-group">
        {cards.map((card) => (
          <div className="card" key={card.title}>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.value}</p>
              <i className={card.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
