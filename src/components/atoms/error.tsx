import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import React from "react";
import { HiXCircle } from "react-icons/hi";

export const Error: FC = () => {
  const { t } = useTranslation("messages");

  return (
    <div className="mx-auto mt-4 max-w-2xl rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <HiXCircle className="h-5 w-5 fill-current text-red-400" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-red-800">{t("error")}</p>
        </div>
      </div>
    </div>
  );
};
