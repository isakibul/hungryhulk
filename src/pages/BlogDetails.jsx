import { useParams } from 'react-router-dom';
import useBlog from '../hooks/useBlog';
import { Circles } from 'react-loader-spinner';

const BlogDetails = () => {
    const blogs = useBlog();
    const { blogId } = useParams();
    const blog = blogs.find((blog) => blog._id === blogId);

    if (!blog) {
        return <div className="bg-stone flex items-center justify-center py-40">
            <Circles
                height="100"
                width="100"
                color="#facc15"
                ariaLabel="circles-loading"
                visible={true}
            />
        </div>;
    }

    return (
        <div className='bg-stone font-rubik py-20 px-6 md:px-32 lg:px-40 xl:px-72'>
            <img src={blog.innerCoverURL} alt={blog.title} />
            <p className='text-2xl md:text-4xl font-bold font-righteous my-5'>{blog.title}</p>
            <div className='mt-10 text-justify flex flex-col gap-5'>
                <div className='text-sm text-gray'>
                    <p>{blog.description1}</p>
                    <br />
                    <p>{blog.description2}</p>
                    <br />
                    <p>{blog.description3}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
