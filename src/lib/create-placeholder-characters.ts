import { nanoid } from "nanoid";
import type { SizeType } from "src/graphql/types";
import { getNumberOfCharacterCards } from "src/lib/get-number-of-characters";

export const createPlaceholderCharacters = (size: SizeType) => {
  const placeholderCharacters = [];

  for (let index = 0; index < getNumberOfCharacterCards(size); index++) {
    placeholderCharacters.push({ id: nanoid(), name: "", image: "" });
  }

  return placeholderCharacters;
};
