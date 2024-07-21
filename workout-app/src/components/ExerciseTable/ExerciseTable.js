import React from 'react';
import './styles.css';
import BorderTextButton from '../BorderTextButton';

function ExerciseTable({
  exercise,
  exerciseIndex,
  onChange,
  onDeleteSet,
  onAddSet,
}) {
  return (
    <>
      <table className='ExerciseTable'>
        <thead>
          <tr>
            <th>Set</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>RPE</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercise.sets.map((set, setIndex) => (
            <tr key={setIndex}>
              <td>{setIndex + 1}</td>
              <td>
                <BorderTextButton
                  value={set.reps}
                  onChange={(e) =>
                    onChange(exerciseIndex, setIndex, 'reps', e.target.value)
                  }
                  dataLabel='Reps'
                />
              </td>
              <td>
                <BorderTextButton
                  value={set.weight}
                  onChange={(e) =>
                    onChange(exerciseIndex, setIndex, 'weight', e.target.value)
                  }
                  dataLabel='Weight'
                />
              </td>
              <td>
                <BorderTextButton
                  value={set.rpe}
                  onChange={(e) =>
                    onChange(exerciseIndex, setIndex, 'rpe', e.target.value)
                  }
                  dataLabel='RPE'
                />
              </td>
              <td>
                <button
                  className='deleteButton'
                  onClick={() => onDeleteSet(exerciseIndex, setIndex)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='addButton' onClick={() => onAddSet(exerciseIndex)}>
        Add Set
      </button>
    </>
  );
}

export default ExerciseTable;
