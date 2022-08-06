/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  letter?: ModelLetterConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelLetterConnection = {
  __typename: "ModelLetterConnection",
  items:  Array<Letter | null >,
  nextToken?: string | null,
};

export type Letter = {
  __typename: "Letter",
  id: string,
  name: string,
  userId: string,
  createdAt: string,
  updatedAt: string,
  userLetterId?: string | null,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateLetterInput = {
  id?: string | null,
  name: string,
  userId: string,
  userLetterId?: string | null,
};

export type ModelLetterConditionInput = {
  name?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelLetterConditionInput | null > | null,
  or?: Array< ModelLetterConditionInput | null > | null,
  not?: ModelLetterConditionInput | null,
  userLetterId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLetterInput = {
  id: string,
  name?: string | null,
  userId?: string | null,
  userLetterId?: string | null,
};

export type DeleteLetterInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelLetterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelLetterFilterInput | null > | null,
  or?: Array< ModelLetterFilterInput | null > | null,
  not?: ModelLetterFilterInput | null,
  userLetterId?: ModelIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    letter?:  {
      __typename: "ModelLetterConnection",
      items:  Array< {
        __typename: "Letter",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        userLetterId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    letter?:  {
      __typename: "ModelLetterConnection",
      items:  Array< {
        __typename: "Letter",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        userLetterId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    letter?:  {
      __typename: "ModelLetterConnection",
      items:  Array< {
        __typename: "Letter",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        userLetterId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateLetterMutationVariables = {
  input: CreateLetterInput,
  condition?: ModelLetterConditionInput | null,
};

export type CreateLetterMutation = {
  createLetter?:  {
    __typename: "Letter",
    id: string,
    name: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    userLetterId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateLetterMutationVariables = {
  input: UpdateLetterInput,
  condition?: ModelLetterConditionInput | null,
};

export type UpdateLetterMutation = {
  updateLetter?:  {
    __typename: "Letter",
    id: string,
    name: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    userLetterId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteLetterMutationVariables = {
  input: DeleteLetterInput,
  condition?: ModelLetterConditionInput | null,
};

export type DeleteLetterMutation = {
  deleteLetter?:  {
    __typename: "Letter",
    id: string,
    name: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    userLetterId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    letter?:  {
      __typename: "ModelLetterConnection",
      items:  Array< {
        __typename: "Letter",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        userLetterId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      letter?:  {
        __typename: "ModelLetterConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLetterQueryVariables = {
  id: string,
};

export type GetLetterQuery = {
  getLetter?:  {
    __typename: "Letter",
    id: string,
    name: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    userLetterId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListLettersQueryVariables = {
  filter?: ModelLetterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLettersQuery = {
  listLetters?:  {
    __typename: "ModelLetterConnection",
    items:  Array< {
      __typename: "Letter",
      id: string,
      name: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
      userLetterId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    letter?:  {
      __typename: "ModelLetterConnection",
      items:  Array< {
        __typename: "Letter",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        userLetterId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    letter?:  {
      __typename: "ModelLetterConnection",
      items:  Array< {
        __typename: "Letter",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        userLetterId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    letter?:  {
      __typename: "ModelLetterConnection",
      items:  Array< {
        __typename: "Letter",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        userLetterId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateLetterSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateLetterSubscription = {
  onCreateLetter?:  {
    __typename: "Letter",
    id: string,
    name: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    userLetterId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateLetterSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateLetterSubscription = {
  onUpdateLetter?:  {
    __typename: "Letter",
    id: string,
    name: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    userLetterId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteLetterSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteLetterSubscription = {
  onDeleteLetter?:  {
    __typename: "Letter",
    id: string,
    name: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    userLetterId?: string | null,
    owner?: string | null,
  } | null,
};
