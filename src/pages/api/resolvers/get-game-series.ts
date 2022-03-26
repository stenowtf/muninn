import { GAME_SERIES } from "src/pages/api/resolvers";

export const getGameSeries = async () => {
  try {
    return GAME_SERIES;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
