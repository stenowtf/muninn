import { SizeType } from "src/pages/api/resolvers";

export const getNumberOfCharacters = (size: SizeType) => {
  switch (size) {
    case SizeType.SMALL:
      return 2;
    case SizeType.MEDIUM:
      return 4;
    case SizeType.LARGE:
      return 8;

    default:
      return 4;
  }
};
