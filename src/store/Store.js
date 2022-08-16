import React, { createContext, useReducer } from 'react';
export const Store = createContext();

export const initialState = {
  todoList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_TASK':
      return {
        todoList: [...state.todoList, action.payload],
      };
    case 'SET_COMPLETED_TASK':
      const index = state.todoList.findIndex(
        (task) => task.id === action.payload
      );
      return {
        todoList: [...state.todoList, (state.todoList[index].completed = true)],
      };
    case 'DELETE_TASK':
      const newList = state.todoList.filter(
        (task) => task.id !== action.payload
      );
      return {
        todoList: [...newList],
      };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
