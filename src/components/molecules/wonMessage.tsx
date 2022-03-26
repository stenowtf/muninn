import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { classNames } from "src/lib/class-names";
import { themeSelector } from "src/store/selectors";
import { useStore } from "src/store/useStore";

type WonMessageProps = {
  reset: () => void;
};

export const WonMessage: FC<WonMessageProps> = ({ reset }) => {
  const { t } = useTranslation("messages");

  const wonMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    wonMessagesRef.current?.focus();
  }, []);

  const theme = useStore(themeSelector);

  return (
    <div
      ref={wonMessagesRef}
      tabIndex={0}
      className={classNames(
        "mx-auto mt-2 max-w-2xl rounded-md p-4",
        theme.background
      )}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <FaStar className="h-5 w-5 fill-current text-yellow-400" />
        </div>
        <div className="ml-3">
          <p className={classNames("text-sm font-medium", theme.text)}>
            {t("won")}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={reset}
              className={classNames(
                "inline-flex items-center rounded border-2 border-transparent px-2.5 py-1.5 text-sm font-medium",
                theme.background,
                theme.text,
                theme.hover
              )}
            >
              {t("again")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
