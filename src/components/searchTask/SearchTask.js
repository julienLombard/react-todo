import React, { useContext, useState, memo } from 'react';
import { Store } from '../../store/Store';
import './searchTask.css';

export const SearchTask = memo(() => {
  const { state } = useContext(Store);
  const { todoList } = state;
  const [search, setSearch] = useState(null);

  const handleSearchForm = (e) => {
    e.preventDefault();

    const regex = new RegExp(e.target['search'].value);

    setSearch(todoList.filter((task) => (regex.test(task.name) ? task : null)));
  };

  return (
    <div className="searchTask-div">
      <h2>Search a Task</h2>
      <div>
        <form action="" onSubmit={handleSearchForm}>
          <input type="text" name="search" placeholder="Task name" />
          <button type="submit">Search</button>
        </form>
        <div className="searchTask-result-div">
          {search !== null ? (
            search.length < 1 ? (
              <p>{'- no task find -'}</p>
            ) : (
              search.map((task, i) => {
                if (task !== null) {
                  return (
                    <div className="searchTask-result-card" key={i}>
                      <p>{'- Task : ' + task.name}</p>
                      <p>
                        {'- Status : '}
                        {task.completed === 'true' ? 'Done' : 'To Do'}
                      </p>
                    </div>
                  );
                }
                return null;
              })
            )
          ) : (
            <p>{'- no search yet -'}</p>
          )}
        </div>
      </div>
    </div>
  );
});
