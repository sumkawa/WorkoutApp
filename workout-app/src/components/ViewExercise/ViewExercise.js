import React from 'react';

const ViewExercise = ({ sets }) => {
  return (
    <div>
      <h2>View Exercise</h2>
      <table>
        <thead>
          <tr>
            <th>Set</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>RPE</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: sets }, (_, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input type='number' name={`reps-${index}`} />
              </td>
              <td>
                <input type='number' name={`weight-${index}`} />
              </td>
              <td>
                <input type='number' name={`rpe-${index}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewExercise;
