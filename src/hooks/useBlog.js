import { useEffect, useState } from "react";
import axios from "axios";

const useBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("blogData");
        if (cachedData) {
          setBlogs(JSON.parse(cachedData));
        } else {
          const response = await axios.get(
            "https://hungryhulk-server.onrender.com/api/blog"
          );
          const responseData = response.data.data;
          localStorage.setItem("blogData", JSON.stringify(responseData));
          setBlogs(responseData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return blogs;
};

export default useBlog;
