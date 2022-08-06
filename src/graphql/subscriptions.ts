/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateLetter = /* GraphQL */ `
  subscription OnCreateLetter($owner: String) {
    onCreateLetter(owner: $owner) {
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
export const onUpdateLetter = /* GraphQL */ `
  subscription OnUpdateLetter($owner: String) {
    onUpdateLetter(owner: $owner) {
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
export const onDeleteLetter = /* GraphQL */ `
  subscription OnDeleteLetter($owner: String) {
    onDeleteLetter(owner: $owner) {
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
