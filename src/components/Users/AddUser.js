import React,{useState} from "react";
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props)=>{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length ===0 || +enteredAge === 0){
            return;
        };
        if(+enteredAge < 1){
            return;
        }
        //console.log(enteredUsername, enteredAge);
        const object = {
            id: Math.random(),
            name: enteredUsername, 
            age: enteredAge
        };

        props.onAddUser(object);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler =(event)=>{
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler =(event)=>{
        setEnteredAge(event.target.value);
    };

    const clickHandler=(event)=>{
        console.log('Clicked!');
    };

    return(
        <div>
            <ErrorModal title="An error occured" message="Something is wrong!"/>

            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={usernameChangeHandler} value = {enteredUsername}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value = {enteredAge}/>
                    <Button type="submit" onClick={clickHandler}>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;