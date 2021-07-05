import Chart from '../Chart/Chart';
// Here we are creating a chart data points for showing the months in the chart. and we are accepting the expense from the Expenses component and by using a for loop it will extract the month value and amount value and then it will add the amount value into the corresponding month value, then it gets sent into the Chart Component.
const ExpensesChart = (props) =>{
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth(); //starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;