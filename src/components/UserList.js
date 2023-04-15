import React, { useState, useEffect } from 'react';
import axios from "axios";


const UserList = () => {
    //to store data
    const [userData, setUserData] = useState("")

    //to fetch data from DB
    const fetchUserData = async () => {
        const res = await axios.get("http://localhost:4000/getusers");
        console.log(res)

        //if no user there in db please dont set the values
        if (res.data.users.length > 0) {
            setUserData(res.data.users)
        }
    }

    useEffect(() => {
        fetchUserData();
    }, [userData])


    //for edit data
    const handleEdit = async(user) => {
        const userName = prompt("Enter your new name");
        const userEmail = prompt("Enter your new email")

        if(!userName || !userEmail){
            alert("Please enter Name, Email both")
        }else{
            const resp = await axios.put(`http://localhost:4000/edituser/${user._id}`,{
                name : userName,
                email:userEmail
            })
            console.log(resp)
        }
        
    }

    //For deleting data
    const handleDelete = async(userId) => {
        const resp = await axios.delete(`http://localhost:4000/deleteuser/${userId}`);
        console.log(resp)

    };
    return (

        <table className="table">
            <thead>
                <tr className="info">
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {userData && userData.map((user) => (
                    <tr>
                        <td >{user.name}</td>
                        <td >{user.email}</td>
                        <td>
                            < button onClick = {() => handleEdit(user)}>Edit</button>
                        </td>
                        <td>
                            <button onClick = {() => handleDelete(user._id)}>Delete</button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>


    )
}

export default UserList
