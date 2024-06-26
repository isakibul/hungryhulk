import { useEffect, useState } from "react";
import axios from "axios";

const usePopularMenu = () => {
  const [popularMenu, setPopularMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("popularMenuData");
        if (cachedData) {
          setPopularMenu(JSON.parse(cachedData));
        } else {
          const response = await axios.get(
            "https://hungryhulk-server.onrender.com/api/popularmenu"
          );
          const responseData = response.data.data;
          localStorage.setItem("popularMenuData", JSON.stringify(responseData));
          setPopularMenu(responseData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return popularMenu;
};

export default usePopularMenu;
