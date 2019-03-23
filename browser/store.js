import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';

//ACTION TYPES
export const ADD_STUDENT = 'ADD_STUDENT';
export const SELECT_STUDENT = 'SELECT_STUDENT';

//ACTION CREATORS
export const addStudent = student => ({
  type: ADD_STUDENT,
  student,
});

export const selectStudent = student => ({
  type: SELECT_STUDENT,
  student,
});

//INITIAL STATE
let initialState = {
  students: [],
  selectedStudent: {},
  isToggleOn: false,
};

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return { ...state, students: [...students, action.student] };
    case SELECT_STUDENT:
      return {};
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
