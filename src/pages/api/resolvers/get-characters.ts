import type { SizeType } from "src/pages/api/resolvers";
import { api, GAME_SERIES } from "src/pages/api/resolvers";
import { getNumberOfCharacters } from "src/pages/api/resolvers/utils/get-number-of-characters";

type CharactersResponse = {
  amiibo: {
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    head: string;
    image: string;
    name: string;
    tail: string;
    type: string;
  }[];
};

type GetCharactersArgs = {
  id: string;
  size: SizeType;
};

export const getCharacters = async (
  _record: never,
  args: GetCharactersArgs
) => {
  try {
    const series = GAME_SERIES.find((gs) => gs.id === args.id);

    if (!series) return null;

    const response = await api.get<CharactersResponse>(
      `?gameseries=${series.name}`
    );

    const shuffled = [...response.data.amiibo].sort(naiveShuffle);
    const selected = shuffled.slice(0, getNumberOfCharacters(args.size));
    const doubledShuffled = [...selected, ...selected].sort(naiveShuffle);
    const doubledShuffledWithId = doubledShuffled.map((character, index) => ({
      ...character,
      id: index,
    }));

    return doubledShuffledWithId;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const naiveShuffle = () => 0.5 - Math.random();
