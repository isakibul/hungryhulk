import { useEffect, useState } from "react";
import axios from "axios";

const useMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("menuData");
        if (cachedData) {
          setMenu(JSON.parse(cachedData));
        } else {
          const response = await axios.get(
            "https://hungryhulk-server.onrender.com/api/menu"
          );
          const responseData = response.data.data;
          localStorage.setItem("menuData", JSON.stringify(responseData));
          setMenu(responseData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return menu;
};

export default useMenu;
