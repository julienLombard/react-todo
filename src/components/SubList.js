import React, { memo, useContext } from 'react';
import { Store } from '../store/Store';

export const SubList = memo(({ button, setter, completed }) => {
  const { state, dispatch } = useContext(Store);
  const { todoList } = state;

  const handleClick = (e) => {
    setter(dispatch, parseInt(e.target.id));
  };

  return todoList
    ? todoList.map((task, i) => {
        if (task.completed === completed) {
          return (
            <p key={i}>
              {task.name + ' => ' + i + ' : '}
              <button
                className={'list-' + button + '-button'}
                id={task.id}
                name={task.name}
                onClick={handleClick}
              >
                v
              </button>
            </p>
          );
        }
        return null;
      })
    : null;
});
