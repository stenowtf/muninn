import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import React from "react";
import { Stats } from "src/components/atoms/stats";
import { Header } from "src/components/molecules/header";

type LayoutProps = {
  test?: null;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation("messages");

  return (
    <>
      <Head>
        <title>{t("metaTitle")}</title>
        <meta name="description" content={t("metaDescription")} />
        <link rel="icon" href="https://fav.farm/🦉" />
      </Head>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pt-4 pb-8 sm:px-6 sm:pt-8 sm:pb-12 lg:max-w-7xl lg:px-8">
          <Header />
          <Stats />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};
