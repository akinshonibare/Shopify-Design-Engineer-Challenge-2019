import { TOGGLE_FAVOURITES } from "../actions/favouritesAction";

const initialState = {
  favourites: []
};

export function favouritesReducer(state = initialState, action) {
  switch (action.type) {
    //setting and removing indexes of users favourited data
    case TOGGLE_FAVOURITES:
      var tempFavourites = state.favourites.slice(0);

      if (typeof action.payload === "object") {
        for (var i = 0; i < action.payload.length; i++) {
          tempFavourites.push(action.payload[i]);
        }
      } else {
        if (state.favourites.includes(action.payload)) {
          tempFavourites = state.favourites.filter(
            item => item !== action.payload
          );
          console.log(tempFavourites);
        } else {
          tempFavourites.push(action.payload);
        }
      }
      return { ...state, favourites: tempFavourites };

    default:
      return state;
  }
}
