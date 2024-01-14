import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../../src/assets/data/blogData';

const BlogDetails = () => {
    const { blogId } = useParams();
    const blog = blogs.find((blog) => blog.id === parseInt(blogId));

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <div className='bg-stone-100 py-20 px-6 md:px-32 lg:px-40 xl:px-72 font-poppins'>
            <img src={blog.image} alt={blog.title} />
            <p className='text-2xl md:text-4xl font-bold font-righteous my-5'>{blog.title}</p>
            <div className='text-justify flex flex-col gap-5'>
                <p>{blog.body}</p>
                <p>{blog.body2}</p>
                <p>{blog.body3}</p>
            </div>
        </div>
    );
};

export default BlogDetails;