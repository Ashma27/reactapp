import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
// https://react-bootstrap.github.io/components/carousel/#carousel-item-props


function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
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
        }

    ]);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index}
       controls={false}
       onSelect={handleSelect}
       fade={true}
       className="slider"
       >
           {blogs.slice(0,3).map((blog)=>(
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={blog.img}
            alt="Second slide"
          />
          <Carousel.Caption>
           <div>
           <h3>{blog.title}</h3>
            <p>{blog.detail}</p>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
     ))}
     </Carousel>
    );
  }



  export default ControlledCarousel;