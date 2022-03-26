import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import React from "react";
import { GameSeriesButton } from "src/components/atoms/game-series-button";
import { GameSeriesMoreButton } from "src/components/atoms/game-series-more-button";
import type { GameSeries } from "src/graphql/types";
import { setWonSelector } from "src/store/selectors";
import { useStore } from "src/store/useStore";

type HomeProps = {
  getGameSeries: GameSeries[];
};

export const Home: FC<HomeProps> = ({ getGameSeries }) => {
  const { t } = useTranslation("messages");

  const setWon = useStore(setWonSelector);

  setWon(false);

  return (
    <div className="relative">
      <div className="mt-10 mb-8">
        <h2 className="text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          {t("heroDescription")}
        </h2>
        <h3 className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
          {t("heroInstructions")}
        </h3>
      </div>

      <div className="grid-col-1 mx-auto grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
        {getGameSeries.map((gameSeries) => (
          <GameSeriesButton
            key={gameSeries.id}
            id={gameSeries.id}
            name={gameSeries.name}
          />
        ))}
        <GameSeriesMoreButton />
      </div>
    </div>
  );
};
