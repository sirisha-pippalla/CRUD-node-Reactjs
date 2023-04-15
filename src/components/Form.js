import React, { useState } from 'react';
import axios from "axios"

const Form = () => {

    //to store the data from frontend
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    console.log(userName, userEmail)

    //Function to send the data to DB
    const submitData = async () => {
        const data = {
            name: userName,
            email: userEmail
        };
        const res = await axios.post("http://localhost:4000/createuser", data);
        console.log(res)
    }

    //To handle the default
    const handleSubmit = (event) => {
        event.preventDefault()

        //To submit data
        submitData();

        //But empty the previous details
        setUserName("");
        setUserEmail("")
    }

    return (

        <form onSubmit={handleSubmit} className="form-inline text-center">
            <h1 style={{ fontSize: "50px", fontWeight: "bolder" }}>Create User</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label style={{ fontSize: "20px", color: "gray" }} htmlFor="exampleInputName2">Name</label> <br />
                        <input type="text" className="form-control" name="name" value = {userName} onChange = {(event) => setUserName(event.target.value)} />
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label style={{ fontSize: "20px", color: "gray" }} htmlFor="exampleInputEmail2">Email</label> <br />
                        <input type="email" className="form-control" name = "email" value = {userEmail} onChange = {(event) => setUserEmail(event.target.value)} />
                    </div>
                </div>
            </div>
            <button className="btn  btn-lg margin-top: -0.25rem !important" type="submit" className="btn btn-default">Submit</button>
        </form>

    )
}

export default Form
