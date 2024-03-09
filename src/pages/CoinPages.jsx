import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// import {ReactHtmlParser} from "react-html-parser";
import { useParams } from "react-router-dom";
import { AppContextData } from "../cryptoContext/AuthContext";
import { SingleCoin } from "../apidata/api";
import CoinsDetails from "../components/CoinsDetails";
import { LinearProgress, Typography} from "@mui/material";



function CoinPages() {
  
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = useContext(AppContextData);
  const fetchSingleCoinData = async () => {
  try{
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  }catch{
   
  }
  };
  useEffect(() => {
    fetchSingleCoinData();
  }, [currency]);
  const numberWithCommas = (s) => {
    return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  if (!coin) return <LinearProgress style={{ backgroundColor: "red" }} />;

  return (
    <div className='container'>
      <div className='sideleft'>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className='heading'>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className='description'>
          {/* {ReactHtmlParser(coin?.description.en.split(". ")[0])}. */}
        </Typography>

        <div className='marketData'>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className='heading'>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" className='heading'>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className='heading'>
              Market price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
      <CoinsDetails coin={coin}/>
    </div>
  );
}

export default CoinPages;
