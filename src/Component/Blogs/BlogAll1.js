import React, {useState} from 'react';
import Slider from './slider';
import './Blog.css';
import Pagination from './Pagination2';



function BlogAll() {
    const [blogs, setBlogs]= useState([
        {
            itemId:1,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"First Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:2,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"2 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:3,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"3 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:4,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"4 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:5,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:6,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:7,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:8,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:9,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:10,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:11,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:12,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:13,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:14,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:15,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:16,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        },
        {
            itemId:17,
            img:"https://i.pinimg.com/originals/34/47/67/344767dc4143958384e8c92a459f2be5.png",
            title:"5 Blog",
            detail:"Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsumLorem ipsumLorem ipsum lorem ipsum lorem ipsum",
        }
    ]);

    const[showPerPage, setShowPerPage] = useState(6);
    const[pagination, setPegination] = useState({
        start:0,
        end: showPerPage
    });
    const onPaginationChange =(start, end) => {
       setPegination({start:start, end:end});
    };
  
    return (
    <div className="blogs">
<Slider />
<div class="fblog">
<h2>Feature Blogs</h2>
<div className="container">
    <div className="row">
    {blogs.slice(pagination.start, pagination.end).map((blog)=>(
        <div className="col-md-4 mb-3" key={blog.itemId}>
        <div className="card">
  <img className="card-img-top" src={blog.img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">#{blog.itemId}<br/> {blog.title}</h5>
    <p className="card-text">{blog.detail}</p>
  </div>
</div>
        </div>
        ))}
    </div>
    <Pagination showPerPage={showPerPage}
    onPaginationChange={onPaginationChange}
    total={blogs.length} />
</div>
</div>
    </div>
    );
  }



  export default BlogAll;