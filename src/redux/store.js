import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from "./reducers";


let allMiddlewares = [thunk]
let store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...allMiddlewares)
    ))

export {store}