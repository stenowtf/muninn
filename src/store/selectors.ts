import type { SizeType } from "src/graphql/types";
import type { Theme } from "src/lib/theme-definitions";
import type { AppState } from "src/store/useStore";

export const wonSelector = (state: AppState): boolean => state.won;
export const setWonSelector = (state: AppState): ((value: boolean) => void) =>
  state.setWon;

export const numberOfWinsSelector = (state: AppState): number =>
  state.numberOfWins;
export const increaseNumberOfWinsSelector = (state: AppState): (() => void) =>
  state.increaseNumberOfWins;

export const numberOfMovesSelector = (state: AppState): number =>
  state.numberOfMoves;
export const increaseNumberOfMovesSelector = (state: AppState): (() => void) =>
  state.increaseNumberOfMoves;

export const sizeSelector = (state: AppState): SizeType => state.size;
export const setSizeSelector = (state: AppState): ((value: SizeType) => void) =>
  state.setSize;

export const themeSelector = (state: AppState): Theme => state.theme;
export const setThemeSelector = (state: AppState): ((value: Theme) => void) =>
  state.setTheme;
