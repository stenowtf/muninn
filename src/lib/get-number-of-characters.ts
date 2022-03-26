import { SizeType } from "src/graphql/types";

export const getNumberOfCharacterCards = (size: SizeType) => {
  switch (size) {
    case SizeType.Small:
      return 4;
    case SizeType.Medium:
      return 8;
    case SizeType.Large:
      return 16;

    default:
      return 8;
  }
};
