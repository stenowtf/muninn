import { RadioGroup } from "@headlessui/react";
import useTranslation from "next-translate/useTranslation";
import type { FC } from "react";
import React from "react";
import { SizeType } from "src/graphql/types";
import { classNames } from "src/lib/class-names";

type DifficultySelectorProps = {
  backgroundColor: string;
  textColor: string;
  size: string;
  setSize: (size: SizeType) => void;
};

export const DifficultySelector: FC<DifficultySelectorProps> = ({
  backgroundColor,
  textColor,
  size,
  setSize,
}) => {
  const { t } = useTranslation("messages");

  return (
    <div className="flex flex-col items-center">
      <RadioGroup
        value={size}
        onChange={setSize}
        className="my-2 flex justify-center space-x-2"
      >
        <RadioGroup.Label className="sr-only">
          {t("difficulty")}
        </RadioGroup.Label>
        <RadioGroup.Option value={SizeType.Small}>
          {({ checked }) => (
            <span
              className={classNames(
                "cursor-pointer rounded px-2.5 py-1.5 text-sm font-medium",
                checked ? `${backgroundColor} ${textColor}` : "bg-gray-50"
              )}
            >
              {t("easy")}
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value={SizeType.Medium}>
          {({ checked }) => (
            <span
              className={classNames(
                "cursor-pointer rounded px-2.5 py-1.5 text-sm font-medium",
                checked ? `${backgroundColor} ${textColor}` : "bg-gray-50"
              )}
            >
              {t("normal")}
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value={SizeType.Large}>
          {({ checked }) => (
            <span
              className={classNames(
                "cursor-pointer rounded px-2.5 py-1.5 text-sm font-medium",
                checked ? `${backgroundColor} ${textColor}` : "bg-gray-50"
              )}
            >
              {t("hard")}
            </span>
          )}
        </RadioGroup.Option>
      </RadioGroup>
    </div>
  );
};
