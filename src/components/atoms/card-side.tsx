import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import React from "react";
import { classNames } from "src/lib/class-names";

type CardSideProps = {
  isCharacter: boolean;
  disabled: boolean;
  handleClick: () => void;
};

export const CardSide: FC<CardSideProps> = ({
  isCharacter,
  disabled,
  handleClick,
  children,
}) => {
  const { t } = useTranslation("messages");

  return (
    <button
      name={t(isCharacter ? "character" : "questionMark")}
      className={classNames(
        isCharacter ? "flipped" : "",
        "backface-hidden absolute inset-0 flex w-full items-center justify-center overflow-hidden rounded-md border-2 border-transparent bg-gray-200"
      )}
      disabled={disabled}
      onClick={handleClick}
      tabIndex={isCharacter ? -1 : 0}
    >
      {children}
    </button>
  );
};
