import { Link } from 'react-router-dom';
// import blogs from '../assets/data/blogs/blogData';
import { FaArrowRightLong } from 'react-icons/fa6';
import useBlog from '../hooks/useBlog';

const Blogs = () => {
    const blogs = useBlog();
    return (
        <div className="bg-stone font-rubik py-20 px-6 md:px-32 lg:px-40 xl:px-72 font-poppins">
            <div className="text-center mb-10">
                <p className="font-righteous text-2xl md:text-4xl font-bold">All About Foods</p>
                <p className="my-2 text-gray-700">
                    Food is any substance consumed to provide nutritional support for an organism.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {blogs.map((blog) => (
                    <div className="bg-white mb-20 lg:m-6" key={blog._id}>
                        <img src={blog.blogImageUrl} alt="" />
                        <div className="px-2 pb-2">
                            <p className="my-2 font-semibold text-xl">{blog.title}</p>
                            <p className="text-sm mb-3">{blog.subDescription}</p>
                            <Link to={`/blogs/${blog._id}`}>
                                <button className="flex items-center gap-2 py-2 px-5 rounded-sm bg-yellow">
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
