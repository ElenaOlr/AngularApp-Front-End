const dev: string = 'http://localhost:3000/api/v1/';
export const URLs = {
  login: `${dev}users/login`,
  register: `${dev}users/signup`,
  socialAuth: `${dev}users/socialAuth`,
  logout: `${dev}users/logout`,
  verify: `${dev}users/verify`,
  randomFood: `${dev}food/random/`,
  getFavFoodsUser: `${dev}favorites/getFavFoodsUser`,
  getFavFoodsSoc: `${dev}favorites/getFavFoodsSoc`,
  addToFavoritesUser: `${dev}favorites/addFoodToFavUser`,
  addToFavoritesSocial: `${dev}favorites/addFoodToFavSoc`,
  deleteFavFoodsUser: `${dev}favorites/deleteFavFoodsUser`,
  deleteFavFoodsSoc: `${dev}favorites/deleteFavFoodsSoc`,
  filters: `${dev}food`,
};
