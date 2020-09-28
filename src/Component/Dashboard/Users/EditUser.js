import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';


const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
    const  [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const {name, username, email, phone, website } = user;
    const onINputChange = e => {
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value});
    }
    const onSubmit = async e =>{
        e.preventDefault();
        await Axios.put(`http://localhost:3004/users/${id}`,user);
        history.push("/dashboard");
    }

    useEffect(()=>{
    loadUser();
    },[]);
    const loadUser = async () => {
        const result = await Axios.get(`http://localhost:3004/users/${id}`);
        setUser(result.data);
    }
    return(
        <div className="adduser container">
             <br/>
        <h2>Edit User</h2><hr/> <br/>
        <form onSubmit={e => onSubmit(e)}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Email" 
      name="name"
      value={name}
      onChange={e => onINputChange(e) } />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Username</label>
      <input type="text" className="form-control" id="inputPassword4" placeholder="username"
      name="username"
      value={username}
      onChange={e => onINputChange(e) } />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="email" className="form-control" id="inputAddress" placeholder="email id"
    name="email"
    value={email}
    onChange={e => onINputChange(e) } />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="website..."
    name="website"
    value={website}
    onChange={e => onINputChange(e) } />
  </div>
  <button type="submit" className="btn btn-warning">Update User</button>
</form>
        </div>
    );
}

export default EditUser;