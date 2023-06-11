import React, { useState, useEffect } from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import TreadingCoin from './TreadingCoin'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './Coins.css'

const Coins = (props) => {
    const [trendCoin, settrendCoin] = useState([])
    const trendCoinurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h'

    useEffect(() => {
        axios.get(trendCoinurl).then((response) => {
          settrendCoin(response.data)
        }).catch((error) => {
          console.log(error)
        })
      }, [])

    return (
        <>
        <TreadingCoin trendCoins={trendCoin}/>
        <div className='container'>
            <div>
            <div className='heading'>
                    <h1 className='heading-title'>Crypto Coins</h1>
                </div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24 Hour</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Market Cap</p>
                </div>

                {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>

                    )
                })}

            </div>
        </div>
        </>
    )
}

export default Coins
