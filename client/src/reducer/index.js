const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
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
    case "ORDER_BY_NAME":
      const orderByName =
        action.payload === "asc"
          ? [...state.countries].sort(function (a, b) {
              if (a.id > b.id) {
                return 1;
              }
              if (b.id > a.id) {
                return -1;
              }
              return 0;
            })
          : [...state.countries].sort(function (a, b) {
              if (a.id > b.id) {
                return -1;
              }
              if (b.id > a.id) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        countries: orderByName,
      };
    case "GET_COUNTRIES_BY_NAME":
      return {
        ...state,
        countries: action.payload,
      };
    case "CREATE_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
