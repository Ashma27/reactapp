import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from '../Blogs/Pagination';

const Crud = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        loadUsers ();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3004/users");
        setUsers(result.data);
    }
    const deleteUser = async id => {
    await axios.delete(`http://localhost:3004/users/${id}`);
    loadUsers();
    }

    const[showPerPage, setShowPerPage] = useState(6);
    const[pagination, setPegination] = useState({
      start:0,
      end: showPerPage
  });
  const onPaginationChange =(start, end) => {
     setPegination({start:start, end:end});
  };
  const paginate = pageNumber => setCurrentPage(pageNumber);
 return(
<div className="AppDash">
    <div className="container">
      <div className="inlinediv">
      <h2>Welcome</h2>   <Link className="btn btn-outline-primary" to="/users/add">Add User</Link>
      </div>
<table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
          users.slice(pagination.start, pagination.end).map((user, index) => (
            <tr>
            <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                      <Link className="btn btn-primary" 
                      to={`/users/${user.id}`}
                       style={{marginRight:'15px'}}>View</Link>
                      <Link className="btn btn-outline-primary" 
                      to={`/users/edit/${user.id}`}
                      style={{marginRight:'15px'}}>Edit</Link>
                      <Link className="btn btn-danger" onClick={() =>deleteUser(user.id)}>Delete</Link>
                  </td>
            </tr>
 ))
      }
   
    
  </tbody>
</table>
<Pagination showPerPage={showPerPage}
    onPaginationChange={onPaginationChange}
    total={users.length}
    paginate={paginate}
     />
</div>
</div>
 );
}

export default Crud;