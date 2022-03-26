import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import React from "react";

const Four04Page: NextPage = () => {
  const { t } = useTranslation("messages");

  return (
    <div>
      <div className="mx-auto my-2 mt-8 max-w-7xl px-2 text-center">
        <h1 className="font-orbitron text-rick text-6xl">{t("404")}</h1>
      </div>
    </div>
  );
};

export default Four04Page;
