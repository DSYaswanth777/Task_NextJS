import React, { useState } from "react";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const PieCharts = () => {
  const [selectedDate, setSelectedDate] = useState(""); // State to store the selected date

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Update the selected date when it changes
  };
  let pieChart = {
    chart: {
      type: "pie",
    },
    series: [55, 31, 14],
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    colors: ["#98D89E", "#EE8484", "#F6DC7D"],
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
        paddingBottom: "15px",
      },
    },
    legend: {
      show: true,
      position: "right",
      horizontalAlign: "right",
      gap: "15px",
      fontSize: "12px",
      fontWeight: "bold", // Increase font weight of the legend
      formatter: function (val, opts) {
        const seriesIndex = opts.seriesIndex;
        const count = pieChart.series[seriesIndex];

        // Calculate the percentage
        const percentage = (
          (count / pieChart.series.reduce((a, b) => a + b, 0)) *
          100
        ).toFixed(0);

        // Return the label and percentage
        return `<span  classname="px-5" style="font-family: Montserrat; font-size: 14px; font-weight: 700; line-height: 17px; letter-spacing: 0em; text-align: left;">${val}</span><br><span style="font-weight:400"> &nbsp; &nbsp;&nbsp;&nbsp;${percentage}%<br><br><span/>`;
      },
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: false,
      marker: {
        show: true,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        startAngle: 180,
        endAngle: -180,
      },
    },
    responsive: [
      {
        breakpoint: 768, // define the breakpoint where the chart configuration changes
        options: {
          chart: {
            height: 200, // decrease the height
            width: 350, // decrease the width
          },
        },
      },
 
    ]
  };

  return (
    <div className="pt-6 pb-5  w-full    pie-chart">
      <div className="bg-white  p-8 rounded-xl w-auto">
        <div className="flex justify-between mb-4 ">
          <div
            className="font-bold text-lg"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "24px",
            }}
          >
            Top Products
          </div>
          <select
            className=" rounded px-3 py-1 text-sm border-none"
            value={selectedDate}
            onChange={handleDateChange}
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
            }}
          >
            <option value="">May-June 2021</option>
            <option value="June 29, 2023">May-June 2021</option>
            <option value="June 30, 2023">June-July 2021</option>
          </select>
        </div>
        <ApexCharts
          options={pieChart}
          series={pieChart.series}
          type="pie"
          height={200}
          width={500}
        />
      </div>
      <div className=" flex flex-col   ">
        <div className="bg-white h-full p-10 rounded-2xl pr-6" style={{minWidth:"440px"}} >
          <div className="flex justify-between">
            <div
              className="font-bold text-lg pb-7"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              Today's Schedule
            </div>
            <div
              className="font-light text-xs "
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              See all{" "}
              <span className="px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                >
                  <path
                    d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z"
                    fill="#858585"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="color_bar"></div>
            <div className="flex flex-col gap-2">
              <div
                className="font-bold text-gray"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                Meeting With Suppliers from Kuta Bali
              </div>
              <div
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "#999999",
                }}
              >
                14.00-15.00
              </div>
              <div
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "#999999",
                }}
              >
                at sunset Road, Kuta Bali
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-3">
            <div className="color_bar2"></div>
            <div className="flex flex-col gap-2">
              <div
                className="font-bold text-gray"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                Check operation at Giga Factory 1
              </div>
              <div
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "#999999",
                }}
              >
                18.00-20.00
              </div>
              <div
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "#999999",
                }}
              >
                at Central Jakarta{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
