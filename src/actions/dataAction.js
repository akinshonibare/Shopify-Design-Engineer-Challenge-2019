export const SET_DATA = "SET_DATA";
export const SET_RESULTS = "SET_RESULTS";

export function setData(data) {
  return { type: SET_DATA, payload: data };
}
export function setResults(searchTerm) {
  return { type: SET_RESULTS, payload: searchTerm };
}
