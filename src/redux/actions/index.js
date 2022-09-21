import axios from 'axios'

export const GET_INFO_TABLE = 'GET_INFO_TABLE';
export const GET_INFO_BY_ID = 'GET_INFO_BY_ID';


export function getInfo() {
    return async function (dispatch) {
      var pedidoApi = await axios.get("https://api.datos.gob.mx/v1/condiciones-atmosfericas");
      return dispatch({
        type: GET_INFO_TABLE,
        payload: pedidoApi.data.results,
      });
    };
}

export function getInfoByID(id) {
    return async function (dispatch) {
      var pedidoApi = await axios.get("https://api.datos.gob.mx/v1/condiciones-atmosfericas");
      return dispatch({
        type: GET_INFO_BY_ID,
        payload: pedidoApi.data.results.filter(i=>i._id === id),
      });
    };
}





