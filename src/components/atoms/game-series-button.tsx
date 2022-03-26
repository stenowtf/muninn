import Link from "next/link";
import type { FC } from "react";
import React from "react";
import { classNames } from "src/lib/class-names";
import { getTheme } from "src/lib/get-theme";
import { THEME_PATH } from "src/lib/routes";

type GameSeriesButtonProps = {
  id: string;
  name: string;
};

export const GameSeriesButton: FC<GameSeriesButtonProps> = ({ id, name }) => {
  const theme = getTheme(id);

  return (
    <div
      className={classNames(
        "relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5",
        theme.hover
      )}
    >
      <div className="flex-shrink-0">
        <span
          className={classNames(
            "inline-flex rounded-lg p-3 ring-4 ring-white",
            theme.background,
            theme.text
          )}
        >
          <theme.Icon className="h-6 w-6 fill-current stroke-current" />
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <Link href={`${THEME_PATH}/${id}`}>
          <a className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className={classNames("text-sm font-medium", theme.text)}>
              {name}
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};
