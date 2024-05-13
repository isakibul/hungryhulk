import { useEffect, useState } from "react";
import axios from "axios";

const useReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("reviewData");
        if (cachedData) {
          setReview(JSON.parse(cachedData));
        } else {
          const response = await axios.get(
            "https://hungryhulk-server.onrender.com/api/review"
          );
          const responseData = response.data.data;
          localStorage.setItem("reviewData", JSON.stringify(responseData));
          setReview(responseData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return review;
};

export default useReview;
