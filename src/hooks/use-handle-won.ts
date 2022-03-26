import { useEffect } from "react";
import { getNumberOfCharacterCards } from "src/lib/get-number-of-characters";
import {
  increaseNumberOfWinsSelector,
  setWonSelector,
  sizeSelector,
} from "src/store/selectors";
import { useStore } from "src/store/useStore";

export const useHandleWon = (current: number) => {
  const setWon = useStore(setWonSelector);
  const increaseNumberOfWins = useStore(increaseNumberOfWinsSelector);
  const size = useStore(sizeSelector);

  useEffect(() => {
    if (current === getNumberOfCharacterCards(size)) {
      increaseNumberOfWins();
      setWon(true);
    }
  }, [current, increaseNumberOfWins, setWon, size]);
};
