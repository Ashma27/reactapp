import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function User() {
    const  [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
        fileimg:""
    });
    const {id} = useParams();
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser = async () => {
        const result = await Axios.get(`http://localhost:3004/users/${id}`);
        setUser(result.data);
    }
  return (
    <div className="App container">
        <br/>
       <Link className="btn btn-warning" to="/">Back to Home</Link>
       <br/>
       <Link className="btn btn-outline-primary" to={`/users/edit/${user.id}`}>Edit</Link>
       <hr/>
       <ul>
           <li>user: {user.name}</li>
           <li>username: {user.username}</li>
           <li>Email Id: {user.email}</li>
           <li>Phone No: {user.phone}</li>
           <li>Website: {user.website}</li>
           <li>Image: <img src={user.fileimg} style={{width:'100px', height:'100px'}}/></li>
       </ul>
    </div>
  );
}

export default User;
