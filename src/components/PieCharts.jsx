import React from "react";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const PieCharts = () => {
  let pieChart = {
    chart: {
      type: "pie",
    },
    series: [55, 31, 14],
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    colors: ["#ccff99", "#ffcc66", "#ff8080"],
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Total Products",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
       
      },
    },
    legend: {
      show: true,
      position: "right",
      horizontalAlign: "right",

      fontSize: "12px",
      fontWeight: "bold", // Increase font weight of the legend
      formatter: function (val, opts) {
        const seriesIndex = opts.seriesIndex;
        const count = pieChart.series[seriesIndex];
        return val;
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
        expandOnClick: true, // Disable the expansion on click
      },
    },
  };
  return (
    <div className="flex justify-between pt-6">
      <div className="bg-white h-full p-5 rounded-xl" >
        <ApexCharts
          options={pieChart}
          series={pieChart.series}
          type="pie"
          height={200}
          width={350}
        />
      </div>
      <div className="flex flex-col ">
        <div className="bg-white h-full p-6 rounded-2xl ">
          <div className="flex gap-64 ">
            <div className="font-bold text-lg pb-2">Today's Schedule</div>
            <div className="font-light text-xs">See all</div>
          </div>
          <div className="flex gap-3">
            <div className="color_bar"></div>
            <div className="flex flex-col">
              <div className="font-bold text-gray">
                Meeting With Suppliers from Kuta Bali
              </div>
              <div>14.00-15.00</div>
              <div>at sunset Road, Kuta Bali</div>
            </div>
          </div>

          <div className="flex gap-3 pt-3">
            <div className="color_bar2"></div>
            <div className="flex flex-col">
              <div className="font-bold text-gray">
                Check operation at Giga Factory 1
              </div>
              <div>18.00-20.00</div>
              <div>at Central Jakarta </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
