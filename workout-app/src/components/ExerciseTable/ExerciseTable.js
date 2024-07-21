import React from 'react';
import './styles.css';
function ExerciseTable({ exercise, exerciseIndex, onChange }) {
  return (
    <table className='ExerciseTable'>
      <thead>
        <tr>
          <th>Set</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>RPE</th>
        </tr>
      </thead>
      <tbody>
        {exercise.sets.map((set, setIndex) => (
          <tr key={setIndex}>
            <td>{setIndex + 1}</td>
            <td>
              <input
                type='number'
                value={set.reps}
                onChange={(e) =>
                  onChange(exerciseIndex, setIndex, 'reps', e.target.value)
                }
              />
            </td>
            <td>
              <input
                type='number'
                value={set.weight}
                onChange={(e) =>
                  onChange(exerciseIndex, setIndex, 'weight', e.target.value)
                }
              />
            </td>
            <td>
              <input
                type='number'
                value={set.rpe}
                onChange={(e) =>
                  onChange(exerciseIndex, setIndex, 'rpe', e.target.value)
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExerciseTable;
