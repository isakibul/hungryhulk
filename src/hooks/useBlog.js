import { useEffect, useState } from "react";
import axios from "axios";

const useBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hungryhulk.onrender.com/api/blog"
        );
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return blogs;
};

export default useBlog;
