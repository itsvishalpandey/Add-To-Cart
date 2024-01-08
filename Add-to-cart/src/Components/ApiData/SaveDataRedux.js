import { useEffect } from "react";
import { useGames } from "./GameApi";
import { useDispatch, useSelector } from "react-redux";
import {
  allCharacter,
  categoryWiseCharacter,
} from "../../Store/CharacterListSlice";

export const SaveDataCharacter = () => {
  const games = useGames();

  const dispatch = useDispatch();
  const storeDataCharacter = useSelector(
    (state) => state.character.totalCharacter
  );

  useEffect(() => {
    if (games && games.length > 0) {
      dispatch(allCharacter(games));
    }
  }, [games, dispatch]);

  return storeDataCharacter;
};

export const SaveDataSeries = () => {
  const games = useGames();

  const getUniqueData = (games, type) => {
    let newVal = games.map((val) => val[type]);
    return ["All", ...new Set(newVal)];
  };

  const dispatch = useDispatch();
  const storeDataSeries = useSelector((state) => state.character.series);

  useEffect(() => {
    if (games && games.length > 0) {
      dispatch(categoryWiseCharacter(getUniqueData(games, "type")));
    }
  }, [games, dispatch]);

  return storeDataSeries;
};
