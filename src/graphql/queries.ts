// tslint:disable
// this is an auto generated file. This will be overwritten

export const getMeasurepoint = `query GetMeasurepoint($id: ID!) {
  getMeasurepoint(id: $id) {
    timestamp
    x
    y
    z
  }
}
`;
export const listMeasurepoints = `query ListMeasurepoints(
  $filter: ModelMeasurepointFilterInput
  $limit: Int
  $nextToken: String
) {
  listMeasurepoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      timestamp
      x
      y
      z
    }
    nextToken
  }
}
`;
