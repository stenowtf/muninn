import produce from "immer";
import { SizeType } from "src/graphql/types";
import type { Theme } from "src/lib/theme-definitions";
import { DEFAULT_THEME } from "src/lib/theme-definitions";
import type { State } from "zustand";
import create from "zustand";

const initialStore = {
  won: false,
  numberOfWins: 0,
  numberOfMoves: 0,
  size: SizeType.Medium,
  theme: DEFAULT_THEME,
};

export interface AppState extends State {
  won: boolean;
  numberOfWins: number;
  numberOfMoves: number;
  size: SizeType;
  theme: Theme;

  setWon: (value: boolean) => void;
  increaseNumberOfWins: () => void;
  increaseNumberOfMoves: () => void;
  setSize: (value: SizeType) => void;
  setTheme: (value: Theme) => void;
}

export const useStore = create<AppState>((set, get) => ({
  ...initialStore,

  setWon: (value) => {
    return set(
      produce<AppState>((state) => {
        state.won = value;
      })
    );
  },

  increaseNumberOfWins: () => {
    return set(
      produce<AppState>((state) => {
        state.numberOfWins = get().numberOfWins + 1;
      })
    );
  },

  increaseNumberOfMoves: () => {
    return set(
      produce<AppState>((state) => {
        state.numberOfMoves = get().numberOfMoves + 1;
      })
    );
  },

  setSize: (value) => {
    return set(
      produce<AppState>((state) => {
        state.size = value;
      })
    );
  },

  setTheme: (value) => {
    return set(
      produce<AppState>((state) => {
        state.theme = value;
      })
    );
  },
}));
