import type { FC } from "react";
import React from "react";
import { Crow } from "src/components/atoms/crow";
import { Title } from "src/components/atoms/title";

export const Header: FC = () => {
  return (
    <div className="flex justify-center space-x-2 text-6xl">
      <Title />
      <Crow />
    </div>
  );
};
