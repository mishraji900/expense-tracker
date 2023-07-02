import React from 'react'
import './ChartBar.css'

const ChartBar = (prop) => {
    let barHeight = '0%';
    if (prop.max>0) {
        barHeight = Math.round((prop.value/prop.maxValue)*100)+'%';
    }
  return (
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height:barHeight,}}>
            </div>
            <div className='chart-bar__lable'>
                {prop.lable}
            </div>
        </div>
    </div>
  )
}

export default ChartBar
