import React, { memo, useState } from 'react';
import { deleteTask, setCompletedTask } from '../store/actions';
import { SearchTask } from './SearchTask';
import { SubList } from './SubList';

export const ListSelector = memo(() => {
  const [showList, setShowList] = useState({
    todo: true,
    done: true,
    searchBar: false,
  });

  const handleClickShowList = (e) => {
    if (e.target.id === 'todo') {
      setShowList({ todo: true, done: false, searchBar: false });
    } else if (e.target.id === 'done') {
      setShowList({ todo: false, done: true, searchBar: false });
    } else if (e.target.id === 'search') {
      setShowList({ todo: false, done: false, searchBar: true });
    } else {
      setShowList({ todo: true, done: true, searchBar: false });
    }
  };

  return (
    <div className="listSelector-div">
      <div className="listSelector-button-div">
        <button id="all" onClick={handleClickShowList}>
          All
        </button>
        <button id="todo" onClick={handleClickShowList}>
          To Do
        </button>
        <button id="done" onClick={handleClickShowList}>
          Done
        </button>
        <button id="searchBar" onClick={handleClickShowList}>
          Search
        </button>
      </div>
      <div className="listSelector-lists-div">
        {showList.todo && (
          <SubList
            name={'To Do'}
            setter={setCompletedTask}
            completed={false}
            button={'done'}
          />
        )}
        {showList.done && (
          <SubList
            name={'Done'}
            setter={deleteTask}
            completed={true}
            button={'delete'}
          />
        )}

        {showList.search && <SearchTask />}
      </div>
    </div>
  );
});
