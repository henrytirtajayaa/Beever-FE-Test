import { ActionTypes } from "../constants/actionTypes";

const initialState = {
     myQuotes : []
}

export const myQuoteReducer = (state = initialState, action) => {
     switch(action.type){
          case ActionTypes.SAVE_MY_QUOTE:
               return{
                    ...state,
                    myQuotes: [...state.myQuotes, action.payload]
               }
          default: return state;
     }
}