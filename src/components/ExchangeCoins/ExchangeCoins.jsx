import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function ExchangeCoins() {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  return (
    <div className="w-full px-4 xl:px-6">
      {/* <div className="bg-green-300">
                <div className="">
                    
                    <label className="" htmlFor="From">
                        Sell
                    </label>
                    <Dropdown
                        className=""
                        options={options}
                        onChange={(e) => {
                            setFrom(e.value);
                        }}
                        value={from}
                        placeholder="From"
                    />
                    
                    <label className="" htmlFor="From">
                        Buy
                    </label>
                    <Dropdown
                        className=""
                        options={options}
                        onChange={(e) => {
                            setTo(e.value);
                        }}
                        value={to}
                        placeholder="To"
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        className=""
                        placeholder="Enter Value"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <p className="">{output.toFixed(2) + ' ' + to}</p>
                </div>
                <div className="">
                    <button
                        className=""
                        onClick={() => {
                            convert();
                        }}
                    >
                        Exchange
                    </button>
                </div>
            </div> */}

      {/* --- Div 1: Exchange Coins Text --- */}
      <div className="dark:text-gray-50 font-bold font-mono pt-2 text-zinc-700 text-lg xl:text-2xl xl:pb-2 xl:pt-4">
        <h1>Exchange Coins</h1>
      </div>
      {/* --- Div 1: Exchange Coins Text --- */}

      <div className="flex place-content-between xl:place-content-stretch">
        <div className="flex">
          {/* --- Div 2: Buy & Sell Text --- */}
          <div className="space-y-4 xl:space-y-[30px] mt-[28px] pr-4 xl:text-lg">
            <h1 className="text-rose-500 font-medium dark:text-rose-400">Sell</h1>
            <h1 className="text-teal-500 font-medium dark:text-emerald-400">Buy</h1>
          </div>
          {/* --- Div 2: Buy & Sell Text --- */}

          {/* --- Div 3: Buy & Sell Dropdown --- */}
          <div className="mt-4 xl:space-y-4 xl:mt-[20px]">
            <Dropdown
              className="uppercase xl:w-40 font"
              menuClassName="h-28"
              options={options}
              onChange={(e) => {
                setFrom(e.value);
              }}
              value={from}
              placeholder="From"
            />
            <Dropdown
              className="w-24 uppercase xl:w-40"
              menuClassName="h-[5.5rem]"
              options={options}
              onChange={(e) => {
                setTo(e.value);
              }}
              value={to}
              placeholder="To"
            />
          </div>
          {/* --- Div 3: Buy & Sell Dropdown --- */}
        </div>

        {/* --- Div 4: Buy & Sell Amount --- */}
        <div className="mt-4 xl:mt-5 space-y-1 xl:space-y-3 xl:pl-6 flex flex-col">
          <input
            type="text"
            className="border rounded-md h-10 text-slate-400 w-24 xl:w-36 focus:outline-none px-2 py-2"
            placeholder="Enter Value"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <p className="px-[10px] py-2 xl:pt-4 text-sm xl:w-36 text-teal-500 dark:text-emerald-400 font-medium">
            {output.toFixed(2) + " " + to.toUpperCase()}
          </p>

          {/* <p className="">{output.toFixed(2) + ' ' + to}</p> */}
        </div>

        {/* --- Div 4: Buy & Sell Amount --- */}
      </div>

      {/* --- Div 4: Exchange Buttion --- */}
      <div className="flex justify-center xl:mt-3">
        <button
          type="button"
          className="bg-blue-400 text-sm px-2 py-1 sm:px-4 text-white rounded-md xl:px-6 xl:py-2 mt-3 transition duration-300 hover:bg-blue-500 focus:outline-none focus:shadow-outline"
          onClick={() => {
            convert();
          }}
        >
          Exchange
        </button>
      </div>
      {/* --- Div 4: Exchange Buttion --- */}
    </div>
  );
}

export default ExchangeCoins;
