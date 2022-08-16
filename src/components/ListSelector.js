import React, { memo, useState } from 'react';
import { deleteTask, setCompletedTask } from '../store/actions';
import { SubList } from './SubList';

export const ListSelector = memo(() => {
  const [showList, setShowList] = useState({
    todo: true,
    done: true,
  });

  const handleClickShowList = (e) => {
    if (e.target.id === 'todo') {
      setShowList({ todo: true, done: false });
    } else if (e.target.id === 'done') {
      setShowList({ todo: false, done: true });
    } else {
      setShowList({ todo: true, done: true });
    }
  };

  return (
    <div>
      <h2 id="all" onClick={handleClickShowList}>
        List
      </h2>
      <div className="lists-div">
        <div className="list-div">
          <h3 id="todo" onClick={handleClickShowList}>
            To Do
          </h3>
          {showList.todo && (
            <SubList
              button={'done'}
              setter={setCompletedTask}
              completed={false}
            />
          )}
        </div>
        <div className="list-div">
          <h3 id="done" onClick={handleClickShowList}>
            Done
          </h3>
          {showList.done && (
            <SubList button={'delete'} setter={deleteTask} completed={true} />
          )}
        </div>
      </div>
    </div>
  );
});
