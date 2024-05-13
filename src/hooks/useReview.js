import { useEffect, useState } from "react";
import axios from "axios";

const useReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hungryhulk-server.onrender.com/api/review"
        );
        setReview(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return review;
};

export default useReview;
