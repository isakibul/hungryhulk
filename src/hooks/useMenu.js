import { useEffect, useState } from "react";
import axios from "axios";

const useMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hungryhulk-server.onrender.com/api/menulist"
        );
        setMenu(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return menu;
};

export default useMenu;
