import React, { memo, useContext } from 'react';
import { Store } from '../../store/Store';
import './subList.css';

export const SubList = memo(({ title, name, setter, completed, button }) => {
  const { state, dispatch } = useContext(Store);
  const { todoList } = state;

  const handleClick = (e) => {
    setter(dispatch, parseInt(e.target.id));
  };

  return (
    <div className="list-div" id={name}>
      <h3>{title}</h3>
      {todoList
        ? todoList.map((task, i) => {
            if (task.completed === completed) {
              return (
                <div className="task-div" key={i}>
                  <div className="task-p-div">
                    <p>{'- ' + task.name}</p>
                  </div>
                  <button
                    className={'list-button'}
                    id={task.id}
                    name={task.name}
                    onClick={handleClick}
                  >
                    {button}
                  </button>
                </div>
              );
            }
            return null;
          })
        : null}
    </div>
  );
});
