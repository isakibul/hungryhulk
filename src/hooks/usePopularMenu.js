import { useEffect, useState } from "react";
import axios from "axios";

const usePopularMenu = () => {
  const [popularMenu, setPopularMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hungryhulk-server.onrender.com/api/popularmenu"
        );
        setPopularMenu(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return popularMenu;
};

export default usePopularMenu;
