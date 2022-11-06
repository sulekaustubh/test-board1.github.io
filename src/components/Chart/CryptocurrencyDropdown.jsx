import React from "react";
import Multiselect from "multiselect-react-dropdown";
import "./CryptoDropdown.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import {actionCreators} from '../../state/index'

const CryptocurrencyDropdown = () => {
  const dispatch = useDispatch();
  const {updateCrypto,removeCrypto} = bindActionCreators(actionCreators,dispatch);

  // const { handleCryptoCurrency, removeCryptocurrency } = props;
  const [cryptoData, setCryptoData] = useState([]);

   // To capitalize the first letter of the Cryptocurrency in the list
   const capitalizeFirstLetter = (cryptoName) => {
    return cryptoName[0].toUpperCase() + cryptoName.slice(1);
}
 
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false";

    const fetchTopCoins = () => {
      axios.get(url, {
          headers: {
              'Accept': 'application/json',
          }
      })
      .then(response => {
          setCryptoData(response.data)
          // console.log(response.data);
      })
      .catch(error => console.log(error));
  };
  
  useEffect(() => {
      fetchTopCoins();
    }, []);
    
    // To store top 10 crypto currencies in the list
    const cryptoList = cryptoData
    .sort((a, b) => b.market_cap - a.market_cap)
    .slice(0, 15)
    .map((coin) => capitalizeFirstLetter(coin.id));

   

  return (
        <Multiselect
          id="crypto_css"
          isObject={false}
          options={cryptoList}
          // onSelect={handleCryptoCurrency}
          // onRemove={removeCryptocurrency}
          onSelect={updateCrypto}
          onRemove={removeCrypto}
          showCheckbox={true}
          showArrow={true}
          selectedValues={[cryptoList[0]]}
          selectionLimit={2}
          avoidHighlightFirstOption={true}
          onSearch={false}
          className="shadow-sm shadow-slate-400 rounded-lg z-20"
          style={{
            chips: {
              borderBottom: "3px solid rgb(31 41 55)",
              // fontSize: "0.8rem",
              marginBottom: "0px",
              borderRadius: "0.25rem",
              background: "rgb(75 85 99)",
              color: "white",
              fontWeight: "500",
            },
            multiselectContainer: {
              color: "black",
            },
            searchBox: {
              // display:'none',
              border: "1px solid #94a3b8",
              borderRadius: "8px",
              background: "rgb(156 163 175)",
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
              color: "black",
            },
            option: {
              color: "grey",
              fontSize: "1rem",
              fontWeight: "500",
            },
            optionContainer: {
              border: "none",
              backgroundColor: "white",
              height: '13.5rem',
              boxShadow:
                "0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.2)",
            },
          }}
        />
  );
};

export default CryptocurrencyDropdown;
