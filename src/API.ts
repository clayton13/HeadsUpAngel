/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateMeasurepointInput = {
  timestamp: string,
  x: number,
  y: number,
  z: number,
};

export type UpdateMeasurepointInput = {
  timestamp?: string | null,
  x?: number | null,
  y?: number | null,
  z?: number | null,
};

export type DeleteMeasurepointInput = {
  id?: string | null,
};

export type ModelMeasurepointFilterInput = {
  timestamp?: ModelStringFilterInput | null,
  x?: ModelFloatFilterInput | null,
  y?: ModelFloatFilterInput | null,
  z?: ModelFloatFilterInput | null,
  and?: Array< ModelMeasurepointFilterInput | null > | null,
  or?: Array< ModelMeasurepointFilterInput | null > | null,
  not?: ModelMeasurepointFilterInput | null,
};

export type ModelStringFilterInput = {
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
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateMeasurepointMutationVariables = {
  input: CreateMeasurepointInput,
};

export type CreateMeasurepointMutation = {
  createMeasurepoint:  {
    __typename: "Measurepoint",
    timestamp: string,
    x: number,
    y: number,
    z: number,
  } | null,
};

export type UpdateMeasurepointMutationVariables = {
  input: UpdateMeasurepointInput,
};

export type UpdateMeasurepointMutation = {
  updateMeasurepoint:  {
    __typename: "Measurepoint",
    timestamp: string,
    x: number,
    y: number,
    z: number,
  } | null,
};

export type DeleteMeasurepointMutationVariables = {
  input: DeleteMeasurepointInput,
};

export type DeleteMeasurepointMutation = {
  deleteMeasurepoint:  {
    __typename: "Measurepoint",
    timestamp: string,
    x: number,
    y: number,
    z: number,
  } | null,
};

export type GetMeasurepointQueryVariables = {
  id: string,
};

export type GetMeasurepointQuery = {
  getMeasurepoint:  {
    __typename: "Measurepoint",
    timestamp: string,
    x: number,
    y: number,
    z: number,
  } | null,
};

export type ListMeasurepointsQueryVariables = {
  filter?: ModelMeasurepointFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMeasurepointsQuery = {
  listMeasurepoints:  {
    __typename: "ModelMeasurepointConnection",
    items:  Array< {
      __typename: "Measurepoint",
      timestamp: string,
      x: number,
      y: number,
      z: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateMeasurepointSubscription = {
  onCreateMeasurepoint:  {
    __typename: "Measurepoint",
    timestamp: string,
    x: number,
    y: number,
    z: number,
  } | null,
};

export type OnUpdateMeasurepointSubscription = {
  onUpdateMeasurepoint:  {
    __typename: "Measurepoint",
    timestamp: string,
    x: number,
    y: number,
    z: number,
  } | null,
};

export type OnDeleteMeasurepointSubscription = {
  onDeleteMeasurepoint:  {
    __typename: "Measurepoint",
    timestamp: string,
    x: number,
    y: number,
    z: number,
  } | null,
};
