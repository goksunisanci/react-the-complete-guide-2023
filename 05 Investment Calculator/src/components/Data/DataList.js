import DataItem from "./DataItem";
import classes from "./DataList.module.css"

const DataList = (props) => {
    if (props.data.length === 0) {
        return (<h3 style={{ textAlign: "center" }}>No invested calculated yet.</h3>)
    };
    return (
        <table className={classes.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item) => (
                    <DataItem year={item.year}
                        totalSaving={item.savingsEndOfYear}
                        yearlyInterest={item.yearlyInterest}
                        totalInterest={item.totalInterest}
                        investedCapital={item.investedCapital}></DataItem>))}
            </tbody>
        </table>
    )
};

export default DataList;