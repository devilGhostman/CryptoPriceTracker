import axios from 'axios'
import React, { useState, useEffect } from 'react'
import moment from "moment"; 

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);   

const CoinChart = (props) => {

    console.log(props.coinId)

    const [chartData, setChartdata] = useState();

    const charturl = `https://api.coingecko.com/api/v3/coins/${props.coinId}/market_chart?vs_currency=inr&days=30`


    useEffect(() => {
        axios.get(charturl).then((res) => {
            console.log(res.data.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) })))
            setChartdata(res.data.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) })))
        }).catch((error) => {
            console.log(error)
        })
    }, [])


  return (
    <div>
        {chartData ? (<div>
            <Line options={{
                responsive: true,
                elements: {
                    point: {
                    radius: 1,
                  },
                },}} 
                data={{
                    labels: chartData.map(value => moment(value.x).format('MMM DD')),
                    datasets: [
                    {
                fill: true,
                label: props.coinId.toUpperCase(),
                data: chartData.map(val => val.y),
                borderColor: '#f7931a',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              }
            ]
          }}/>
        </div>) : (<h1>Loading...</h1>)}
    </div>
  )
}

export default CoinChart