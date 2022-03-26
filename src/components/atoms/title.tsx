import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import React from "react";
import { HOME_PATH } from "src/lib/routes";

export const Title: FC = () => {
  const { t } = useTranslation("messages");

  return (
    <h1 className="font-solway tracking-tighter">
      <Link href={HOME_PATH}>
        <a>{t("title")}</a>
      </Link>
    </h1>
  );
};
