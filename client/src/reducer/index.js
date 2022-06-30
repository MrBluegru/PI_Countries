const initialState = {
  countries: [],
  allCountries: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case "FILTER_COUNTRIES_BY_CONTINENT":
      const allcountries = state.allCountries;
      const filterByContinent =
        action.payload === "All"
          ? allcountries
          : allcountries.filter(
              (country) => country.continent === action.payload
            );
      return {
        ...state,
        countries: filterByContinent,
      };
    default:
      return state;
  }
}

export default rootReducer;
