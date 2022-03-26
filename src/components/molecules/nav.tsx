import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import React from "react";
import { HiHome } from "react-icons/hi";
import { Spinner } from "src/components/atoms/spinner";
import { DifficultySelector } from "src/components/molecules/difficulty-selector";
import { HOME_PATH } from "src/lib/routes";
import {
  setSizeSelector,
  sizeSelector,
  themeSelector,
} from "src/store/selectors";
import { useStore } from "src/store/useStore";

type NavProps = {
  isFetching: boolean;
};

export const Nav: FC<NavProps> = ({ isFetching }) => {
  const { t } = useTranslation("messages");

  const theme = useStore(themeSelector);
  const size = useStore(sizeSelector);
  const setSize = useStore(setSizeSelector);

  return (
    <div className="mx-auto flex max-w-2xl items-center justify-between border-y px-1">
      <Link href={HOME_PATH}>
        <a className={`flex-shrink-0 ${theme.text}`}>
          <HiHome className="h-5 w-5 fill-current" />
          <span className="sr-only">{t("home")}</span>
        </a>
      </Link>

      <DifficultySelector
        backgroundColor={theme.background}
        textColor={theme.text}
        size={size}
        setSize={setSize}
      />

      <Spinner color={theme.text} spinning={isFetching} />
    </div>
  );
};
