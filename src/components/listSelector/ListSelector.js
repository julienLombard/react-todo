import React, { memo, useState } from 'react';
import { deleteTask, setCompletedTask } from '../../store/actions';
import { SearchTask } from '../searchTask/SearchTask';
import { SubList } from '../subList/SubList';
import './listSelector.css';

export const ListSelector = memo(() => {
  const [showList, setShowList] = useState({
    todo: true,
    done: true,
    searchBar: false,
  });

  const handleClickShowList = (e) => {
    switch (e.target.id) {
      case 'todo':
        setShowList({ todo: true, done: false, searchBar: false });
        break;
      case 'done':
        setShowList({ todo: false, done: true, searchBar: false });
        break;
      case 'searchBar':
        setShowList({ todo: false, done: false, searchBar: true });
        break;

      default:
        setShowList({ todo: true, done: true, searchBar: false });
        break;
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
            title={'To Do'}
            name={'todo-list'}
            setter={setCompletedTask}
            completed={false}
            button={'Done'}
          />
        )}
        {showList.done && (
          <SubList
            title={'Done'}
            name={'done-list'}
            setter={deleteTask}
            completed={true}
            button={'Delete'}
          />
        )}

        {showList.searchBar && <SearchTask />}
      </div>
    </div>
  );
});
