/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createLetter = /* GraphQL */ `
  mutation CreateLetter(
    $input: CreateLetterInput!
    $condition: ModelLetterConditionInput
  ) {
    createLetter(input: $input, condition: $condition) {
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
export const updateLetter = /* GraphQL */ `
  mutation UpdateLetter(
    $input: UpdateLetterInput!
    $condition: ModelLetterConditionInput
  ) {
    updateLetter(input: $input, condition: $condition) {
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
export const deleteLetter = /* GraphQL */ `
  mutation DeleteLetter(
    $input: DeleteLetterInput!
    $condition: ModelLetterConditionInput
  ) {
    deleteLetter(input: $input, condition: $condition) {
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
