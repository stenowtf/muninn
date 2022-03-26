import type { NextPage } from "next";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Header } from "src/components/molecules/header";
import { HOME_PATH } from "src/lib/routes";

const InvalidPage: NextPage = () => {
  const { t } = useTranslation("messages");

  return (
    <div>
      <div className="mx-auto my-2 mt-8 max-w-7xl px-2 text-center">
        <Header />
        <h1 className="text-rick mt-4 mb-4 font-solway text-xl">
          {t("invalid")}
        </h1>
        <Link href={HOME_PATH}>
          <a className="hover:underline">{t("back")}</a>
        </Link>
      </div>
    </div>
  );
};

export default InvalidPage;
