import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  enum SizeType {
    SMALL
    MEDIUM
    LARGE
  }

  type GameSeries {
    id: String!
    name: String!
  }

  type Character {
    id: String!
    amiiboSeries: String!
    character: String!
    gameSeries: String!
    head: String!
    image: String!
    name: String!
    tail: String!
    type: String!
  }

  type Query {
    getGameSeries: [GameSeries!]!
    getCharacters(id: String!, size: SizeType!): [Character!]
  }
`;
