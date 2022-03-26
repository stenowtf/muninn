import type { ClientError } from "graphql-request";
import { useQuery } from "react-query";
import type {
  GetCharactersQuery,
  GetCharactersQueryVariables,
} from "src/graphql/types";
import { client } from "src/lib/client";
import { createPlaceholderCharacters } from "src/lib/create-placeholder-characters";

export const useGetCharactersQuery = (
  variables: GetCharactersQueryVariables
) => {
  const getCharacters = async () => {
    const data = await client.GetCharacters(variables);

    return data;
  };

  return useQuery<GetCharactersQuery, ClientError>(
    ["characters", variables],
    getCharacters,
    {
      placeholderData: {
        getCharacters: createPlaceholderCharacters(variables.size),
      },
    }
  );
};
