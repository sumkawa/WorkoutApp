import Image from 'next/image';
import styles from './styles.css';
import AddExercise from '@/components/AddExercise/AddExercise';
import ExercisesProvider from '@/components/ExercisesProvider/ExercisesProvider';
export default function Home() {
  return (
    <main>
      <ExercisesProvider>
        <AddExercise></AddExercise>
      </ExercisesProvider>
    </main>
  );
}
