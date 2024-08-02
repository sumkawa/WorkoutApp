import React from 'react';

function Input({ label, value, onChange }) {
  return (
    <div class='form__group field'>
      <input
        type='input'
        class='form__field'
        placeholder='Name'
        name='name'
        id='name'
        required
      />
      <label for='name' class='form__label'>
        Habit
      </label>
    </div>
  );
}

export default Input;
