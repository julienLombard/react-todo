export const setNewTask = (dispatch, newTask) => {
  return dispatch({
    type: 'CREATE_TASK',
    payload: newTask,
  });
};

export const setCompletedTask = (dispatch, id) => {
  return dispatch({
    type: 'SET_COMPLETED_TASK',
    payload: id,
  });
};

export const deleteTask = (dispatch, id) => {
  return dispatch({
    type: 'DELETE_TASK',
    payload: id,
  });
};
