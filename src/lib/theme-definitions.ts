import type { IconType } from "react-icons";
import { FaQuestionCircle } from "react-icons/fa";
import { MdCatchingPokemon, MdPlumbing } from "react-icons/md";
import { RiPlantFill } from "react-icons/ri";

export type Theme = {
  background: string;
  text: string;
  hover: string;
  Icon: IconType;
};

export const DEFAULT_THEME = {
  background: "bg-gray-50",
  text: "text-gray-700",
  hover: "hover:border-gray-400",
  Icon: FaQuestionCircle,
};

export const MARIO_THEME = {
  background: "bg-rose-50",
  text: "text-rose-700",
  hover: "hover:border-rose-400",
  Icon: MdPlumbing,
};

export const ANIMAL_CROSSING_THEME = {
  background: "bg-teal-50",
  text: "text-teal-700",
  hover: "hover:border-teal-400",
  Icon: RiPlantFill,
};

export const POKEMON_THEME = {
  background: "bg-yellow-50",
  text: "text-yellow-700",
  hover: "hover:border-yellow-400",
  Icon: MdCatchingPokemon,
};
