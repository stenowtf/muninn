import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import React from "react";
import {
  numberOfMovesSelector,
  numberOfWinsSelector,
} from "src/store/selectors";
import { useStore } from "src/store/useStore";

export const Stats: FC = () => {
  const { t } = useTranslation("messages");

  const numberOfMoves = useStore(numberOfMovesSelector);
  const numberOfWins = useStore(numberOfWinsSelector);

  return (
    <div className="absolute top-0 right-1 text-gray-400">
      <p className="flex space-x-1 text-xs">
        <span className="">{t("numberOfMoves", { count: numberOfMoves })}</span>
        <span>&bull;</span>
        <span className="text-xs">
          {t("numberOfWins", { count: numberOfWins })}
        </span>
      </p>
    </div>
  );
};
