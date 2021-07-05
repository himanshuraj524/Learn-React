import './Chart.css';

import ChartBar from './ChartBar';
// The below function will take the dataPoints from the ExpensesChart component and make a new array of the values of the datapoints then, by using the max function it will find out the maximum value and it will return the label, value, maximumvalue and a key into the chartBar component.
const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    
    const totalMaximum = Math.max(...dataPointValues)
    
    return( 
    <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />)}
    </div>
    );
};

export default Chart;
