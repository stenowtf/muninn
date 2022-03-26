import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import React from "react";
import { FaCrow } from "react-icons/fa";
import { classNames } from "src/lib/class-names";
import { numberOfWinsSelector, wonSelector } from "src/store/selectors";
import { useStore } from "src/store/useStore";

export const Crow: FC = () => {
  const { t } = useTranslation("messages");

  const won = useStore(wonSelector);
  const numberOfWins = useStore(numberOfWinsSelector);

  const bouncingCrow = won && numberOfWins % 10 !== 0;
  const spinningCrow = won && numberOfWins % 10 === 0;

  return (
    <div
      className={classNames(
        "relative flex",
        bouncingCrow ? "animate-bounce" : "",
        spinningCrow ? "animate-spin" : ""
      )}
    >
      <FaCrow aria-hidden={true} className="shrink-0" />
      {won && (
        <p className="small-caps absolute text-xs">
          {t(bouncingCrow ? "yay" : "omg")}
        </p>
      )}
    </div>
  );
};
