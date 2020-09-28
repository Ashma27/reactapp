import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './Pagination';



function BlogAll() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        const loadUsers = async () => {
            const result = await axios.get("http://localhost:3004/blogs");
            setBlogs(result.data);
        }
        loadUsers ();
    }, []);

    const[showPerPage, setShowPerPage] = useState(6);
    const[pagination, setPegination] = useState({
        start:0,
        end: showPerPage
    });
    const onPaginationChange =(start, end) => {
       setPegination({start:start, end:end});
    };
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
   
<div class="fblog">
<h2>Feature Blogs</h2>
<div className="container">
    <div className="row">
    {blogs.slice(pagination.start, pagination.end).map((blog)=>(
        <div className="col-md-4 mb-3" key={blog.id}>
        <div className="card">
  <img className="card-img-top" src={blog.img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">#{blog.id}<br/> {blog.title}</h5>
    <p className="card-text">{blog.name}</p>
  </div>
</div>
        </div>
        ))}
    </div>
    <Pagination showPerPage={showPerPage}
    onPaginationChange={onPaginationChange}
    total={blogs.length}
    paginate={paginate}
     />
</div>
</div>
    );
  }



  export default BlogAll;