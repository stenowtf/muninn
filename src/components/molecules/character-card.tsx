import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import React from "react";
import { FaQuestion } from "react-icons/fa";
import { CardSide } from "src/components/atoms/card-side";
import { classNames } from "src/lib/class-names";

type CharacterCardProps = {
  characterImage: string;
  selected: boolean;
  disabled: boolean;
  handleSelect: () => void;
};

export const CharacterCard: FC<CharacterCardProps> = ({
  characterImage,
  selected,
  disabled,
  handleSelect,
}) => {
  const { t } = useTranslation("messages");

  return (
    <div className="perspective-500">
      <div
        className={classNames(
          "preserve-3d relative h-48 w-[137px] transition-transform duration-1000",
          selected ? "flipped" : ""
        )}
      >
        <CardSide
          isCharacter={false}
          disabled={selected || disabled}
          handleClick={handleSelect}
        >
          <FaQuestion className="h-2/3 w-2/3 bg-gray-200 object-cover object-center" />
          <span className="sr-only">{t("questionMark")}</span>
        </CardSide>
        <CardSide
          isCharacter={true}
          disabled={selected || disabled}
          handleClick={handleSelect}
        >
          <img
            src={characterImage}
            alt={t("character")}
            className="h-full w-full bg-gray-200 object-cover object-center"
          />
        </CardSide>
      </div>
    </div>
  );
};
