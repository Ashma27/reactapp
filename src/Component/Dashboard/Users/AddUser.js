import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';


const AddUser = () => {
    let history = useHistory();
    const  [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
        fileimg:""
    });

    const {name, username, email, phone, website,fileimg } = user;
    const onINputChange = e => {
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value});
    }
    const onSubmit = async e =>{
        e.preventDefault();
        await Axios.post("http://localhost:3004/users",user);
        history.push("/dashboard");
    }

    return(
        <div className="adduser container">
             <br/>
        <h2>Add User</h2><hr/> <br/>
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
  <div class="form-group">
    <label for="inputAddress2">Upload Image</label>
    <input type="file" className="form-control" id="inputAddress2" placeholder="website..."
    name="fileimg"
    value={fileimg}
    onChange={e => onINputChange(e) } />
  </div>
  <button type="submit" className="btn btn-primary">Add User</button>
</form>
        </div>
    );
}

export default AddUser;