import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";
import { Error } from "src/components/atoms/error";
import { CharacterCard } from "src/components/molecules/character-card";
import { Nav } from "src/components/molecules/nav";
import { WonMessage } from "src/components/molecules/wonMessage";
import type { Character } from "src/graphql/types";
import { useGetCharactersQuery } from "src/hooks/use-get-characters-query";
import { useHandleWon } from "src/hooks/use-handle-won";
import { useRedirectWhenUnsuccessful } from "src/hooks/use-redirect-when-unsuccessful";
import {
  increaseNumberOfMovesSelector,
  setWonSelector,
  sizeSelector,
  wonSelector,
} from "src/store/selectors";
import { useStore } from "src/store/useStore";

type ThemeByIdProps = {
  id: string;
};

export const ThemeById: FC<ThemeByIdProps> = ({ id }) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [selected, setSelected] = useState<Partial<Character>[]>([]);
  const [done, setDone] = useState<Partial<Character>[]>([]);

  const won = useStore(wonSelector);
  const setWon = useStore(setWonSelector);
  const increaseNumberOfMoves = useStore(increaseNumberOfMovesSelector);
  const size = useStore(sizeSelector);

  const { isSuccess, data, error, refetch, isFetching } = useGetCharactersQuery(
    { id, size }
  );

  useRedirectWhenUnsuccessful(data?.getCharacters === null && isSuccess);
  useHandleWon(done.length);

  const handleSelect = (character: Partial<Character>) => {
    increaseNumberOfMoves();
    setSelected((prevState) => [...prevState, character]);
  };

  const reset = useCallback(() => {
    setWon(false);
    setSelected([]);
    setDone([]);
    refetch();
  }, [refetch, setWon]);

  useEffect(() => {
    if (size) {
      reset();
    }
  }, [reset, size]);

  useEffect(() => {
    if (selected.length === 2) {
      setDisabled(true);

      const delayedCheck = () => {
        if (selected[0].name === selected[1].name) {
          setDone((prevState) => [...prevState, ...selected]);
        }

        setSelected([]);
        setDisabled(false);
      };

      setTimeout(delayedCheck, 1200);
    }
  }, [selected]);

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Nav isFetching={isFetching} />

      {won && <WonMessage reset={reset} />}

      <div className="mt-4 flex flex-col items-center justify-center space-y-4">
        <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-4">
          {data &&
            data.getCharacters?.map((character) => (
              <CharacterCard
                key={character.id}
                characterImage={character.image}
                selected={
                  selected.includes(character) || done.includes(character)
                }
                disabled={isFetching || disabled}
                handleSelect={() => handleSelect(character)}
              />
            ))}
        </div>
      </div>
    </>
  );
};
