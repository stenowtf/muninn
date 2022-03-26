import type { Theme } from "src/lib/theme-definitions";
import {
  ANIMAL_CROSSING_THEME,
  DEFAULT_THEME,
  MARIO_THEME,
  POKEMON_THEME,
} from "src/lib/theme-definitions";

export const getTheme = (id: string): Theme => {
  switch (id) {
    case "mario":
      return MARIO_THEME;

    case "animal-crossing":
      return ANIMAL_CROSSING_THEME;

    case "pokemon":
      return POKEMON_THEME;

    default:
      return DEFAULT_THEME;
  }
};
