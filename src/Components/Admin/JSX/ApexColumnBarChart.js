// import React from "react";
// import Chart from "react-apexcharts";
// import style from "../CSS/ApexColumnBarChart.css";

// const ApexColumnBarChart = () => {
//   const data = {
//     series: [
//       {
//         name: "Sky Blue",
//         data: [30, 40, 25, 50, 49, 60, 70, 91, 125, 110, 95, 82],
//         color: "#52CDFF", // Sky Blue
//       },
//       {
//         name: "Blue",
//         data: [20, 35, 30, 45, 40, 55, 65, 85, 100, 95, 80, 75],
//         color: "#1F3BB3", // Blue
//       },
//     ],
//     options: {
//       chart: {
//         type: "bar",
//         height: 350,
//         stacked: true,
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: "55%",
//           endingShape: "rounded",
//           colors: {
//             ranges: [
//               {
//                 from: 0,
//                 to: 30,
//                 color: "#52CDFF", // Sky Blue
//               },
//               {
//                 from: 31,
//                 to: 100,
//                 color: "#1F3BB3", // Blue
//               },
//             ],
//           },
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         width: 2,
//         colors: ["transparent"],
//       },
//       xaxis: {
//         categories: [
//           "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//         ],
//       },
      
//       tooltip: {
//         y: {
//           formatter: function (val) {
//             return "$ " + val + " thousands";
//           },
//         },
//       },
//       fill: {
//         opacity: 1,
//       },
//       legend: {
//         position: "top",
//         offsetY: 30,
//       },
//     },
//   };

//   return (
//     <div className={style.apexChart}>
//       <Chart options={data.options} series={data.series} type="bar" height={350} />
//     </div>
//   );
// };

// export default ApexColumnBarChart;

import React from "react";
import Chart from "react-apexcharts";
import style from "../CSS/ApexColumnBarChart.css";

const ApexColumnBarChart = () => {
  const data = {
    series: [
      {
        name: "Sky Blue",
        data: [110, 290, 200, 190, 290, 290, 210, 110, 205, 202, 201, 150],
        color: "#52CDFF", // Sky Blue
      },
      {
        name: "Blue",
        data: [215, 210, 210, 250, 210, 230, 210, 210, 210, 220, 220, 210],
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
            position: "top", // Show data labels at the top of each bar
            offsetY: -15, // Adjust the offset to align labels with bars
          },
          columnWidth: "50%", // Adjust the width of the bars
        },
      },
      colors: ["#52CDFF", "#1F3BB3"], // Define colors for series
      xaxis: {
        categories: [
          "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ],
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toString(); // Convert number to string
          },
        },
        max: 300,
        tickAmount: 3, // Adjust the number of ticks on the y-axis
      },
      legend: {
        position: "top",
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
    <div className={style.apexChart}>
      <Chart options={data.options} series={data.series} type="bar" height={220} />
    </div>
  );
};

export default ApexColumnBarChart;


