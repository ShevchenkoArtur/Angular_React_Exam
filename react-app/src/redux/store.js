import {combineReducers, createStore} from "redux";
import carReducer from "./reducers/carReducer";

const reducers = combineReducers({
    carsCRUD: carReducer
})

const store = createStore(reducers)

export default store