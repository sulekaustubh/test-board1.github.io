import React from 'react';
import CoinList from './CoinList';

function MarketCap_EndPoint({currency,search}) {
    return (
        <div className="h-[51.4rem] lg:h-[47.3rem] xl:h-[51.4rem]">
            <CoinList currency={currency} search={search}/>
        </div>
    )
}

export default MarketCap_EndPoint;
