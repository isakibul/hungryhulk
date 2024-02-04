import { useParams } from 'react-router-dom';
import useBlog from '../hooks/useBlog';

const BlogDetails = () => {
    const blogs = useBlog();
    const { blogId } = useParams();
    const blog = blogs.find((blog) => blog.id === parseInt(blogId));

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <div className='bg-stone font-rubik py-20 px-6 md:px-32 lg:px-40 xl:px-72'>
            <img src={blog.image} alt={blog.title} />
            <p className='text-2xl md:text-4xl font-bold font-righteous my-5'>{blog.title}</p>
            <div className='mt-10 text-justify flex flex-col gap-5'>
                <p>{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogDetails;
