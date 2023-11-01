import classes from "./UserForm.module.css"
import { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";

const UserForm = (props) => {
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState();

    const userNameInputHandler = (event) => {
        setUserName(event.target.value)
    }

    const ageInputHandler = (event) => {
        setAge(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values.)"
            })
            return;
        }
        if (+age < 1) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid age (>0)"
            })
            return;
        }
        const userInfo = {
            userName: userName,
            age: age
        }
        props.onSaveUserInfo(userInfo)
        setUserName("")
        setAge("")
    };

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.formElement}>
                        <label className={classes.formLabel} htmlFor="username">Username</label>
                        <input id="username" className={classes.formInput} onChange={userNameInputHandler} value={userName} type="text"></input>
                    </div>
                    <div className={classes.formElement}>
                        <label className={classes.formLabel} htmlFor="age">Age (Years)</label>
                        <input if="age" className={classes.formInput} onChange={ageInputHandler} value={age} type="number"></input>
                    </div>
                    <div className={classes.formElement}>
                        <Button type="submit">Add User</Button>
                    </div>
                </form>
            </Card>
        </div>
    )
};

export default UserForm;