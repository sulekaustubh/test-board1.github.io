import React from "react";
import LineChart from "./LineChart";
import VerticalBarChart from "./VerticalBarChart";
import HorizontalBarChart from "./HorizontalBarChart";
import { Routes, Route } from "react-router-dom";

function Charts() {
  // const { chartData1, chartData2 } = props;

  return (
    <div className="flex justify-center items-start lg:w-full">
      <div
        className="relative w-[16rem] h-[20rem] 
                        xs:w-[21rem] xs:h-[22rem]
                        xs2:w-[26rem] xs2:h-[22rem]
                        sm:w-[36rem] sm:h-[22rem]
                        md:w-[42rem] md:h-[22rem]
                        md2:w-[50rem] md2:h-[22rem]
                        lg:w-[38rem] lg:h-[22rem]
                        xl:w-[53rem] xl:h-[22rem]
                        2xl:w-[58rem] 2xl:h-[22rem]"
      >
        <Routes>
          <Route path="/" element={<VerticalBarChart />} />
          <Route path="/line" element={<LineChart />} />
          <Route path="/horizontalBar" element={<HorizontalBarChart />} />
        </Routes>
      </div>
    </div>
  );
}

export default Charts;
