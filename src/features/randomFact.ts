import { createAction, createReducer } from "@reduxjs/toolkit";

export enum FactStatus {
  NORMAL,
  FETCHING,
  SUCCESS,
  FAILURE,
}

interface Fact {
  fact: string | null;
  status: FactStatus;
}

const initialState: Fact = {
  fact: null,
  status: FactStatus.NORMAL,
};

//actions
const isFetching = createAction("is fethcing fact");
const isSuccess = createAction<string>("success fact");
const isFailure = createAction("failure fact");

const factActions = { isFetching, isSuccess, isFailure };

const randomFactReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(isFetching, (state) => ({
      status: FactStatus.FETCHING,
      fact: state.fact,
    }))
    .addCase(isSuccess, (state, action) => ({
      status: FactStatus.SUCCESS,
      fact: action.payload,
    }))
    .addCase(isFailure, (state) => ({
      status: FactStatus.FAILURE,
      fact: state.fact,
    }));
});

export { factActions, randomFactReducer };
