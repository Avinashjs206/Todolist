import React from "react";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const ToDoList = () => {
    return <>
        <div className = 'main-div'>
            <div className="center-div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" name="" id="" placeholder = "Add an item"/>
                <Button className = "newBtn">
                    <AddCircleIcon/>
                </Button>
            </div>
        </div>
    </>
}

export default ToDoList;