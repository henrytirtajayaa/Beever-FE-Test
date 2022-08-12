import { combineReducers } from "redux";
import { favoriteReducer } from "./favoriteReducer";
import { myQuoteReducer } from "./myQuoteReducer";
import { quoteReducer, QUOTE_KEY } from "./quoteReducer";

const reducer = combineReducers({
     [QUOTE_KEY]: quoteReducer,
     fav: favoriteReducer,
     myQuotes: myQuoteReducer
})

export default reducer;