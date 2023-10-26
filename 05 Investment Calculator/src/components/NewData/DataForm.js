import React, { useState } from "react"
import classes from "./DataForm.module.css"

const DataForm = (props) => {
    const [enteredCurrentSaving, setEnteredCurrentSaving] = useState("");
    const [enteredYearlyContribution, setEnteredYearlyContribution] = useState("");
    const [enteredExpectedReturn, setEnteredExpectedReturn] = useState("");
    const [enteredDuration, setEnteredDuration] = useState("");
    let yearlyData;

    const currentSavingChangeHandler = (event) => {
        setEnteredCurrentSaving(event.target.value);
    };

    const yearlyContributionChangeHandler = (event) => {
        setEnteredYearlyContribution(event.target.value);
    };

    const expectedReturnChangeHandler = (event) => {
        setEnteredExpectedReturn(event.target.value);
    };

    const durationChangeHandler = (event) => {
        setEnteredDuration(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault()

        yearlyData = [];

        let currentSavings = +enteredCurrentSaving;
        const yearlyContribution = +enteredYearlyContribution;
        const expectedReturn = +enteredExpectedReturn / 100;
        const duration = +enteredDuration;
        let totalInterest = 0;

        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            totalInterest += yearlyInterest;
            let investedCapital = currentSavings - totalInterest;
            yearlyData.push({
                year: i + 1,
                savingsEndOfYear: currentSavings,
                yearlyInterest: yearlyInterest,
                totalInterest : totalInterest,
                investedCapital : investedCapital
            });
        }

        props.onSaveData(yearlyData)
        setEnteredCurrentSaving("")
        setEnteredYearlyContribution("")
        setEnteredExpectedReturn("")
        setEnteredDuration("")
 
    };

    const resetHandler =() => {
        setEnteredCurrentSaving("")
        setEnteredYearlyContribution("")
        setEnteredExpectedReturn("")
        setEnteredDuration("")
        yearlyData = []
    };


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" value={enteredCurrentSaving} onChange={currentSavingChangeHandler} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" value={enteredYearlyContribution} onChange={yearlyContributionChangeHandler} />
                </p>
            </div>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" value={enteredExpectedReturn} onChange={expectedReturnChangeHandler} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" value={enteredDuration} onChange={durationChangeHandler} />
                </p>
            </div>
            <p className={classes.actions}>
                <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
};

export default DataForm;