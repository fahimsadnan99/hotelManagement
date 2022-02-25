import { createStore, applyMiddleware } from "redux"
import Thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import RootReducer from './Reducers/RootReducers'

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
);

export default Store
