import { ActionTypes } from "../constants/actionTypes";
import axios from 'axios';

export const getQuotes = () => {
     return async (dispatch) => {
          try{
               dispatch({type: ActionTypes.GET_QUOTE})
               let url = 'https://api.kanye.rest/'
               let response = await axios.get(url)
               dispatch({type: ActionTypes.GET_QUOTE_SUCCESS, payload: response.data})
          }catch(e){
               console.log("Error Message", e);
          }
     }
}
