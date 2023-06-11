import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'

import './TreandingCoin.css'

const TreadingCoin = (props) => {
  return (
    <>
    <div className='container'>
            <div>
                <div className='heading'>
                    <h1 className='heading-title'>Treading Coin</h1>
                </div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24 Hour</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Market Cap</p>
                </div>

                {props.trendCoins.map(coins => {
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

export default TreadingCoin