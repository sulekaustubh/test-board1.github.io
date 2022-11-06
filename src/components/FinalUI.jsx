import React from "react";
import FiatDropdown from "./CurrencyDropdown/FiatDropdown";
import MainChart from "./Chart/MainChart";
import MarketCapEndPoint from "./Coin/MarketCapEndPoint";
import ExchangeCoins from "./ExchangeCoins/ExchangeCoins";
import Portfolio from "./Portfolio/Portfolio";
import SearchBar from "./Search/SearchBar";
import NavBar from './Navbar/NavBar'
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function FinalUI() {
  const darkMode = useSelector((state) => state.darkMode);

  const [loading, setLoading] = useState(false);
  let color = "#5794cd";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <NavBar />
      {loading === true ? (
        <div className="w-screen h-[70vh] flex justify-center items-center">
          <HashLoader color={color} loading={loading} size={100} />
        </div>
      ) : (
        <div className="p-6 md:px-10 lg:flex dark:bg-slate-800 bg-slate-100 place-content-between">
          {/* --- LEFT DIV --- */}
          <div className="lg:w-screen">
            {/* --- Fiat Dropdown & Search feature --- */}
            <div className="space-x-6 flex">
              <div className="w-28 h-10 bg-white dark:bg-gray-700 flex justify-center drop-shadow rounded-md border border-neutral-200">
                <FiatDropdown />
              </div>

              {/* <div className="w-screen lg:max-w-[480px] border border-black h-10"> */}
              <div className="h-10 w-full">
                <SearchBar />
              </div>
            </div>
            {/* --- Fiat Dropdown & Search feature --- */}
            {/* --- Chart --- */}
            {/* <div className="lg:max-w-[620px] mt-6 border border-black h-96 "> */}
            <div className="dark:bg-gray-700 mt-6 bg-white drop-shadow rounded-md h-[30rem] border border-neutral-200">
              <div>
                <MainChart />
              </div>
            </div>
            {/* --- Chart --- */}
            {/* --- Portfolio & Exchange Coins --- */}

            <div className="md:flex md:space-x-6 md:space-y-0 mt-6 space-y-6 w-full xl:h-64">
              <div className="dark:bg-gray-700 border border-neutral-200 rounded-md bg-white drop-shadow  h-48 md:w-screen lg:h-48 lg:w-full xl:h-full">
                <Portfolio />
              </div>
              <div className="dark:bg-gray-700 border border-neutral-200 rounded-md bg-white drop-shadow h-48 md:w-screen lg:h-48 lg:w-full xl:h-full mx-auto">
                <ExchangeCoins />
                {/* <Exchange/> */}
              </div>
            </div>
            {/* --- Portfolio & Exchange Coins --- */}
          </div>
          {/* --- LEFT DIV --- */}
          {/* --- RIGHT/BOTTOM DIV --- */}
          <div className="lg:w-screen lg:max-w-sm">
            <div>
              {/* --- Market Cap --- */}
              <div className="mt-6 lg:mt-0 lg:ml-6">
                {/* <div className="border border-black h-[600px] 2xl:h-[1030px] 2xl:w-[480px] xl:h-[995px] xl:w-[360px]"> */}
                <div className="border rounded-md bg-white dark:bg-gray-700 drop-shadow">
                  <MarketCapEndPoint />
                </div>
              </div>
              {/* --- Market Cap --- */}
            </div>
          </div>
          {/* --- RIGHT/BOTTOM DIV --- */}

          {/* <div className="w-screen border">market cap</div> */}
        </div>
      )}
    </div>
  );
}

export default FinalUI;
