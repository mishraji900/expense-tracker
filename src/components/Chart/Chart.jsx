import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointValue = props.dataPoints ? props.dataPoints.map((dataPoint) => dataPoint.value) : [];
  const totalMax = Math.max(...dataPointValue);

  return (
    <div>
      {props.dataPoints ? props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      )) : null}
    </div>
  );
};

export default Chart;
