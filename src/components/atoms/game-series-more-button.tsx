import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import React from "react";
import { MdMoreHoriz } from "react-icons/md";

export const GameSeriesMoreButton: FC = () => {
  const { t } = useTranslation("messages");

  return (
    <div className="relative flex items-center space-x-3 rounded-lg border border-dashed border-gray-300 bg-white px-6 py-5">
      <div className="flex-shrink-0">
        <span className="inline-flex rounded-lg bg-gray-50 p-3 text-gray-400 ring-4 ring-white">
          <MdMoreHoriz className="h-6 w-6 fill-current stroke-current" />
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div>
          <span className="absolute inset-0" aria-hidden="true"></span>
          <p className="text-sm font-medium text-gray-400">{t("moreTheme")}</p>
        </div>
      </div>
    </div>
  );
};
