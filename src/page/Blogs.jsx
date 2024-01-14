import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../src/assets/data/blogData';
import { FaArrowRightLong } from 'react-icons/fa6';

const Blogs = () => {
    return (
        <div className="bg-stone-100 py-20 px-6 md:px-32 lg:px-40 xl:px-72 font-poppins">
            <div className="text-center">
                <p className="font-righteous text-2xl md:text-4xl font-bold">All About Foods</p>
                <p className="my-2 text-gray-700">
                    Food is any substance consumed to provide nutritional support <br /> for an organism.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {blogs.map((blog) => (
                    <div className="bg-white mb-20 lg:m-6" key={blog.id}>
                        <img src={blog.image} alt="" />
                        <div className="px-1 pb-4">
                            <p className="my-2 font-semibold">{blog.title}</p>
                            <p className="text-sm mb-3">{blog.subBody}</p>
                            <Link to={`/blogs/${blog.id}`}>
                                <button className="flex items-center gap-2 py-2 px-5 rounded-sm bg-yellow-400">
                                    Read More <FaArrowRightLong />
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
