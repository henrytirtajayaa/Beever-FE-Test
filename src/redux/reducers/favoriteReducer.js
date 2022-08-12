import { ActionTypes } from "../constants/actionTypes";

const initialState = {
     fav : []
}

export const favoriteReducer = (state = initialState, action) => {
     switch(action.type){
          case ActionTypes.SAVE_FAVORITE:
               return{
                    ...state,
                    fav: [...state.fav, action.payload]
               }
          default: return state;
     }
}