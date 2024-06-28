import React from "react";
import Chart from "react-apexcharts";
import style from "../CSS/ApexColumnBarChart.css";

const ApexColumnBarChart = () => {
  const data = {
    series: [
      {
        name: "Sky Blue",
        data: [110, 220, 200, 190, 220, 110, 210, 110, 205, 202, 201, 150],
        color: "#52CDFF", // Sky Blue
      },
      {
        name: "Blue",
        data: [215, 290, 210, 250, 290, 230, 290, 210, 280, 220, 220, 300],
        color: "#1F3BB3", // Blue
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 220,
        stacked: true,
        toolbar: {
          show: false, // Hide toolbar (including menu icon)
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: "rounded",
          dataLabels: {
            enabled: false, // Disable data labels inside bars
          },
          columnWidth: "40%", // Adjust the width of the bars
        },
      },
      dataLabels: {
        enabled: false, // Disable data labels inside bars
      },
      colors: ["#52CDFF", "#1F3BB3"], // Define colors for series
      xaxis: {
        categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toString(); // Convert number to string
          },
        },
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
        colors: ["#52CDFF", "#1F3BB3"], // Define colors for series without background color
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 220,
            },
          },
        },
      ],
    },
  };

  return (
    <div className="apexChart">
      <Chart options={data.options} series={data.series} type="bar" height={220} />
    </div>
  );
};

export default ApexColumnBarChart;
