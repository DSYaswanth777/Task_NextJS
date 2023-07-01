import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { RotateSpinner,  } from "react-spinners-kit";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieCharts = () => {
  const [loading, setLoading] = useState(true);
  const [pieChart, setPieChart] = useState({
    chart: {
      type: "pie",
    },
    series: [],
    labels: [],
    colors: [],
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
      fontWeight: "bold",
      formatter: function (val, opts) {
        const seriesIndex = opts.seriesIndex;
        const count = opts.w.config.series[seriesIndex];
        const total = opts.w.config.series.reduce((a, b) => a + b, 0);
        const percentage = ((count / total) * 100).toFixed(0);
        return `<span className="px-5" style="font-family: Montserrat; font-size: 14px; font-weight: 700; line-height: 17px; letter-spacing: 0em; text-align: left;">${val}</span><br><span style="font-weight:400"> &nbsp; &nbsp;&nbsp;&nbsp;${percentage}%<br><span/>`;
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
        breakpoint: 768,
        options: {
          chart: {
            height: 200,
            width: 350,
          },
        },
      },
    ],
  });

  useEffect(() => {
    fetch("https://fake-json-server-api.onrender.com/pieChart")
      .then((response) => response.json())
      .then((data) => {
        setPieChart((prevChart) => ({
          ...prevChart,
          series: data?.series,
          labels: data?.labels,
          colors: data?.colors,
        }));
      })
      .catch((error) => {
        console.log("Error fetching pie chart data:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading state to false in both success and error cases
      });
  }, []);


  return (
    <div className="pt-9 pb-5 w-full pie-chart">
      <div className="bg-white p-8 rounded-xl pie_chart_container">
        <div className="flex justify-between mb-4">
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
            className="rounded px-3 py-1 text-sm border-none"
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

        {loading ? <RotateSpinner/>: (
        <ApexCharts
          options={pieChart}
          series={pieChart?.series}
          type="pie"
          height={200}
          width={500}
        />
      )}
      </div>
      <div className="flex flex-col">
        <div className="bg-white h-full p-10 rounded-2xl pr-6 schedule_sectio">
          <div className="flex gap-32 lg:gap-48">
            <div
              className="font-bold text-lg pb-7"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              Today&rsquo;s Schedule
            </div>
            <div
              className="font-light text-xs ml-auto"
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
