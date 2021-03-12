import {combineReducers} from "redux";
import BurgerReducer from "./BurgerReducer";
import ToDoListReducer from "./ToDoListReducer";

const rootReducer = combineReducers({
  BurgerReducer,
  ToDoListReducer,
});

export default rootReducer;
