export const TOGGLE_FAVOURITES = "TOGGLE_FAVOURITES";

export function toggleFavourites(id) {
  return { type: TOGGLE_FAVOURITES, payload: id };
}
