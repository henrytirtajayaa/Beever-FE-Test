import { ActionTypes } from "../constants/actionTypes";

export const QUOTE_KEY = 'quoteStore'

const initialState = {
     data: [],
     loading: false,
     errorMessage:''
}

export const quoteReducer = (state = initialState, {type, payload}) => {
     let arrPayload = []
     arrPayload.push(payload)
     switch(type){
          case ActionTypes.GET_QUOTE:
               return { ...state, loading:true };
          case ActionTypes.GET_QUOTE_SUCCESS:
               return { ...state, loading:true, data: arrPayload };
          default:
               return state;
     }
};
