import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Character = {
  __typename?: "Character";
  amiiboSeries: Scalars["String"];
  character: Scalars["String"];
  gameSeries: Scalars["String"];
  head: Scalars["String"];
  id: Scalars["String"];
  image: Scalars["String"];
  name: Scalars["String"];
  tail: Scalars["String"];
  type: Scalars["String"];
};

export type GameSeries = {
  __typename?: "GameSeries";
  id: Scalars["String"];
  name: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  getCharacters?: Maybe<Array<Character>>;
  getGameSeries: Array<GameSeries>;
};

export type QueryGetCharactersArgs = {
  id: Scalars["String"];
  size: SizeType;
};

export enum SizeType {
  Large = "LARGE",
  Medium = "MEDIUM",
  Small = "SMALL",
}

export type GetCharactersQueryVariables = Exact<{
  id: Scalars["String"];
  size: SizeType;
}>;

export type GetCharactersQuery = {
  __typename?: "Query";
  getCharacters?: Array<{
    __typename?: "Character";
    id: string;
    name: string;
    image: string;
  }> | null;
};

export type GetGameSeriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetGameSeriesQuery = {
  __typename?: "Query";
  getGameSeries: Array<{ __typename?: "GameSeries"; id: string; name: string }>;
};

export const GetCharactersDocument = gql`
  query GetCharacters($id: String!, $size: SizeType!) {
    getCharacters(id: $id, size: $size) {
      id
      name
      image
    }
  }
`;
export const GetGameSeriesDocument = gql`
  query GetGameSeries {
    getGameSeries {
      id
      name
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    GetCharacters(
      variables: GetCharactersQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetCharactersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCharactersQuery>(GetCharactersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetCharacters",
        "query"
      );
    },
    GetGameSeries(
      variables?: GetGameSeriesQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetGameSeriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetGameSeriesQuery>(GetGameSeriesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetGameSeries",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
