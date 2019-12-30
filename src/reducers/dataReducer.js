import { SET_DATA, SET_RESULTS } from "../actions/dataAction";

const initialState = {
  data: [],
  results: []
};

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    //setting toronto waste data, assigning their index as id
    case SET_DATA:
      var dataWIndex = [];
      for (var j = 0; j < action.payload.length; j++) {
        dataWIndex.push({
          dataObject: action.payload[j],
          id: j
        });
      }
      return { ...state, data: dataWIndex };

    //searching data using users input and the setting the result
    case SET_RESULTS:
      var tempResults = [];
      if (!(action.payload === 0)) {
        for (var i = 0; i < state.data.length; i++) {
          if (state.data[i].dataObject.keywords.includes(action.payload)) {
            tempResults.push(state.data[i]);
          }
        }
      }
      return { ...state, results: tempResults };

    default:
      return state;
  }
}
