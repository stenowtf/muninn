import axios from "axios";
import { getCharacters } from "src/pages/api/resolvers/get-characters";
import { getGameSeries } from "src/pages/api/resolvers/get-game-series";

export const api = axios.create({
  baseURL: "https://amiiboapi.com/api/amiibo/",
});

export const GAME_SERIES = [
  { id: "mario", name: "Mario Sports Superstars" },
  { id: "animal-crossing", name: "Animal Crossing" },
  { id: "pokemon", name: "Pokemon" },
];

export enum SizeType {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export const resolvers = { SizeType, Query: { getGameSeries, getCharacters } };
