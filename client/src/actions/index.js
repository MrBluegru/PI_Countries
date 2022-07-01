import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: response.data,
    });
  };
}

export function filterCountriesByContinent(payload) {
  return {
    type: "FILTER_COUNTRIES_BY_CONTINENT",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function getCountriesByName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        "http://localhost:3001/countries?name=" + name
      );
      return dispatch({
        type: "GET_COUNTRIES_BY_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function CreateActivities(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/activities",
      payload
    );
    return dispatch({
      type: "CREATE_ACTIVITIES",
      payload: response.data,
    });
  }
}
