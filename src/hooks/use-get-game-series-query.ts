import type { ClientError } from "graphql-request";
import { useQuery } from "react-query";
import type {
  GetGameSeriesQuery,
  GetGameSeriesQueryVariables,
} from "src/graphql/types";
import { client } from "src/lib/client";

export const getGameSeries = async (variables: GetGameSeriesQueryVariables) => {
  const data = await client.GetGameSeries(variables);

  return data;
};

export const useGetGameSeriesQuery = (
  variables: GetGameSeriesQueryVariables
) => {
  return useQuery<GetGameSeriesQuery, ClientError>(["gameSeries"], () =>
    getGameSeries(variables)
  );
};
