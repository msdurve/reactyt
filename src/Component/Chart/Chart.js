import React from "react";
import ChartBar from './ChartBar';
import Example from "./Example";
import './Chart.css';
const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value); //this is the point where we have the get the highest value of the year.
    const totalMaximum = Math.max(...dataPointsValues); // here the 12 number which present the highest number.
    return (
      <>
        <div className="chart">
            {props.dataPoints.map((dataPoint) => <ChartBar 
            key={dataPoint.label} 
            value={dataPoint.value} 
            maxValue={totalMaximum}
            label={dataPoint.label} />)}
        </div>
        <Example/>
      </>
    );
}
export default Chart;