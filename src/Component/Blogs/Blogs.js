import React from 'react';
import Slider from './slider';
import BlogAll from './BlogAll';
import './Blog.css';
import Prodcuts from '../Products/Products';

const Blogs = () => {

    return(
        <div className="blogs">
        <Slider />
        <BlogAll />
        <Prodcuts />
        </div>
    );
}

export default Blogs;