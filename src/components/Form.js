import React, { useContext, memo } from 'react';
import { setNewTask } from '../store/actions';
import { Store } from '../store/Store';

export const Form = memo(() => {
  const { dispatch } = useContext(Store);
  const handleForm = (e) => {
    e.preventDefault();

    setNewTask(dispatch, {
      id: Date.now(),
      name: e.target['name'].value,
      completed: false,
    });

    // alert('Nouvelle tache ajoutée: ' + e.target['name'].value);
  };

  return (
    <div>
      <h2>Form</h2>
      <form action="" onSubmit={handleForm}>
        <input type="text" name="name" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
});
