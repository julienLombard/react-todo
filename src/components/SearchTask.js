import React, { useContext, useState, memo } from 'react';
import { Store } from '../Store';

export const SearchTask = memo(({ toDoList }) => {
  const { state } = useContext(Store);
  const { todoList } = state;
  const [search, setSearch] = useState(null);

  const handleSearchForm = (e) => {
    e.preventDefault();
    setSearch(todoList.find((task) => task.name === e.target['search'].value));
    // setSearch(
    //   todoList.map((task) =>
    //     task.name === e.target['search'].value ? task : null
    //   )
    // );
    // searchTask(dispatch, e.target['search'].value);
  };

  return (
    <div>
      <h2>SearchTask</h2>
      <div>
        <form action="" onSubmit={handleSearchForm}>
          <input type="text" name="search" />
          <button type="submit">Search</button>
        </form>
        <div>
          {search !== null ? (
            search !== undefined ? (
              <p>{search.name + ' => ' + search.completed}</p>
            ) : (
              // search.map((task, i) => (
              //   <p key={i}>{task.name + ' => ' + task.completed}</p>
              // ))
              <p>no task find</p>
            )
          ) : (
            <p>no search yet</p>
          )}
        </div>
      </div>
    </div>
  );
});
