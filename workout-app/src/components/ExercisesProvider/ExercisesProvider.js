'use client';
import React from 'react';

export const ExercisesContext = React.createContext();

function ExercisesProvider({ children }) {
  const [exercises, setExercises] = React.useState([]);
  return (
    <ExercisesContext.Provider value={{ exercises, setExercises }}>
      {children}
    </ExercisesContext.Provider>
  );
}

export default ExercisesProvider;
