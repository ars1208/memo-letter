/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      letter {
        items {
          id
          name
          userId
          createdAt
          updatedAt
          userLetterId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        letter {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getLetter = /* GraphQL */ `
  query GetLetter($id: ID!) {
    getLetter(id: $id) {
      id
      name
      userId
      createdAt
      updatedAt
      userLetterId
      owner
    }
  }
`;
export const listLetters = /* GraphQL */ `
  query ListLetters(
    $filter: ModelLetterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLetters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userId
        createdAt
        updatedAt
        userLetterId
        owner
      }
      nextToken
    }
  }
`;
