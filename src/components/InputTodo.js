import React, {Fragment, useState} from 'react';

const InputTodo = () => {
    // setup react hooks to grab the inputs state
    const [description, setDescription] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();  //prevent the form from refreshing
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST", //we making a post request
                headers: {"Content-Type": "application/json"}, //contents are sent in json format.
                body: JSON.stringify(body) //convert the body to a string
            });

            
            window.location = "/"; //refresh the page
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <Fragment>
            <h1 className="text-center mt-5">My amazing Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" 
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
};

export default InputTodo;