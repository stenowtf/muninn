import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Header } from "src/components/molecules/header";

const Five00Page: NextPage = () => {
  const { t } = useTranslation("messages");

  return (
    <div>
      <div className="mx-auto my-2 mt-8 max-w-7xl px-2 text-center">
        <Header />
        <h1 className="text-rick mt-4 font-solway text-xl">{t("500")}</h1>
      </div>
    </div>
  );
};

export default Five00Page;
