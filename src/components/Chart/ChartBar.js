import './ChartBar.css';
// This component will access the value and maxvalue from the Chart component and by using the round function it calculate the value for setting the height of the chartfilling.
const ChartBar = props => {
    let barFillHeight='px';

    if(props.maxValue > 0){
        barFillHeight=Math.round((props.value / props.maxValue) * 100) + 'px';
    }

    return(
        <div className='chart-bar'>
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;