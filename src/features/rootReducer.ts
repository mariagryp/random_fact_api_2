import { combineReducers } from "@reduxjs/toolkit";
import RandomFact from "../components/RandomFact";
import { randomFactReducer } from "./randomFact";

const rootReducer = combineReducers({
  randomFact: randomFactReducer,
});

export { rootReducer };
