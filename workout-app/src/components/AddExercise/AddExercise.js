'use client';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';
import { ExercisesContext } from '@/components/ExercisesProvider/ExercisesProvider';

function AddExercise() {
  const [sets, setSets] = React.useState(3);
  const [exerciseName, setExerciseName] = React.useState('');
  const { exercises, setExercises } = React.useContext(ExercisesContext);

  const handleAddExercise = (e) => {
    e.preventDefault();
    const newExercise = {
      name: exerciseName,
      sets: Array.from({ length: sets }, () => ({
        rpe: '',
        reps: '',
        weight: '',
      })),
    };

    setExercises([...exercises, newExercise]);

    setExerciseName('');
    setSets(3);
  };

  console.log('Exercises:', exercises);

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className='Button violet'>Add Exercise</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='DialogOverlay' />
          <Dialog.Content className='DialogContent'>
            <Dialog.Title className='DialogTitle'>Add Exercise</Dialog.Title>
            <Dialog.Description className='DialogDescription'>
              Select an exercise and set the number of sets.
            </Dialog.Description>
            <form onSubmit={handleAddExercise}>
              <fieldset className='Fieldset'>
                <label className='Label' htmlFor='name'>
                  Name
                </label>
                <input
                  className='Input'
                  id='name'
                  value={exerciseName}
                  onChange={(e) => setExerciseName(e.target.value)}
                />
              </fieldset>
              <fieldset className='Fieldset'>
                <label className='Label' htmlFor='sets'>
                  Number of Sets
                </label>
                <input
                  className='Input'
                  id='sets'
                  type='number'
                  value={sets}
                  onChange={(e) => setSets(parseInt(e.target.value))}
                  min='1'
                />
              </fieldset>
              <div
                style={{
                  display: 'flex',
                  marginTop: 25,
                  justifyContent: 'flex-end',
                }}
              >
                <button type='submit' className='Button green'>
                  Add Exercise
                </button>
              </div>
            </form>
            <Dialog.Close asChild>
              <button className='IconButton' aria-label='Close'>
                Close
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default AddExercise;
