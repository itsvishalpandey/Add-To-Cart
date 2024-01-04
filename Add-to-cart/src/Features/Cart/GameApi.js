import { useEffect, useState } from "react";

import axios from "axios";

export const useGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {
        const response = await axios.get(
          "https://www.amiiboapi.com/api/amiibo/"
        );
        setGames(response.data.amiibo.slice(0, 20));
      } catch (error) {
        console.log(error);
      }
    };

    func();
  }, []);
  return games;
};
