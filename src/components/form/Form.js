import React, { useContext, memo } from 'react';
import { setNewTask } from '../../store/actions';
import { Store } from '../../store/Store';
import './form.css';

export const Form = memo(() => {
  const { dispatch } = useContext(Store);
  const handleForm = (e) => {
    e.preventDefault();

    if (e.target['name'].value !== '') {
      setNewTask(dispatch, {
        id: new Date().valueOf(),
        name: e.target['name'].value,
        completed: false,
      });

      // alert('Nouvelle tache ajoutée: ' + e.target['name'].value);
      // } else {
      // alert('Veuillez entrer une tâche à effectuer');
    }
  };

  return (
    <div className="form-div">
      <h2>To-do List</h2>
      <form action="" onSubmit={handleForm}>
        <input type="text" name="name" placeholder="New task" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
});
