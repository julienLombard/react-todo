import React, { memo, useContext } from 'react';
import { Store } from '../store/Store';

export const SubList = memo(({ name, setter, completed, button }) => {
  const { state, dispatch } = useContext(Store);
  const { todoList } = state;

  const handleClick = (e) => {
    setter(dispatch, parseInt(e.target.id));
  };

  return (
    <div className="list-div">
      <h3>{name}</h3>
      {todoList
        ? todoList.map((task, i) => {
            if (task.completed === completed) {
              return (
                <p key={i}>
                  {task.name}
                  <button
                    className={'list-' + button + '-button'}
                    id={task.id}
                    name={task.name}
                    onClick={handleClick}
                  >
                    {button}
                  </button>
                </p>
              );
            }
            return null;
          })
        : null}
    </div>
  );
});
