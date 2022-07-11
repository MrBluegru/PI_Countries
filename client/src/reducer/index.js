const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  countriesDetails: {}
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

    case "ORDER_BY_POPULATION":
      const orderByPopulation =
        action.payload === "populationAsc"
          ? [...state.countries].sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : [...state.countries].sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        countries: orderByPopulation,
      };

    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };

    case "FILTER_ACTIVITIES":
      const allActivities = state.activities;
      const filterByActivity =
        action.payload === "All"
          ? allActivities
          : allActivities.filter(
              (activity) => activity.name === action.payload
            );
      return {
        ...state,
        activities: filterByActivity,
      };
    case "COUNTRIES_DETAILS":
      return {
        ...state,
        countriesDetails: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
