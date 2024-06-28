import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import "../CSS/ApexColumnBarChart.css";

const DonutChart = () => {
  // Sample data
  const data = [
    { name: "AVG", students: 10, fill: "#81DADA" },
    { name: "Gross", students: 30, fill: "#52CDFF" },
    { name: "Net", students: 20, fill: "#FDD0C7" },
    { name: "Total", students: 40, fill: "#1F3BB3" },
  ];

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <PieChart width={500} height={500} className="DonutChart">
        <Tooltip />
        <Pie
          data={data}
          dataKey="students"
          outerRadius={110}
          innerRadius={50}
          fill="#1F3BB3" // Total
        />
        <Pie
          data={data}
          dataKey="students"
          outerRadius={110}
          innerRadius={50}
          fill="#FDD0C7" // Net
        />
        <Pie
          data={data}
          dataKey="students"
          outerRadius={110}
          innerRadius={50}
          fill="#52CDFF" // Gross
        />
        <Pie
          data={data}
          dataKey="students"
          outerRadius={110}
          innerRadius={50}
          fill="#81DADA" // AVG
        />
      </PieChart>
    </div>
  );
};

export default DonutChart;
