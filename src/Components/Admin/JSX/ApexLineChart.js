import React from "react";
import Chart from "react-apexcharts";
import style from "../CSS/ApexColumnBarChart.css";

const ApexLineChart = () => {
  const data = {
    series: [
      {
        name: "Blue",
        data: [18, 25, 39, 11, 24],
        color: "#52CDFF", // Sky Blue
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 160,
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
          columnWidth: "50%", // Adjust the width of the bars
        },
      },
      dataLabels: {
        enabled: false, //Disable data labels inside bars
      },

      xaxis: {
        categories: ["JAN", "FEB", "MAR", "APR", "MAY"],
        axisBorder: {
          show: false, // Hide x-axis horizontal line
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            // Convert number to string and format as required
            if (val === 0) {
              return "0";
            } else if (val < 10) {
              return `0-${val}`;
            } else {
              const lowerRange = Math.floor(val / 10) * 10;
              return `${lowerRange}`;
            }
          },
        },
        max: 40, // Adjust maximum value to fit the desired range
        tickAmount: 4, // Adjust the number of ticks on the y-axis
        axisBorder: {
          show: false, // Hide y-axis horizontal line
        },
      },
      grid: {
        show: false, // Hide grid lines
      },
      legend: {
        show: false, // Hide legend
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
              height: 180,
            },
          },
        },
      ],
    },
  };

  return (
    <div className={style.apexChart}>
      <Chart options={data.options} series={data.series} type="bar" height={160} />
    </div>
  );
};

export default ApexLineChart;
