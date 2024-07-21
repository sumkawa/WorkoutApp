import Image from 'next/image';
import styles from './styles.css';
import AddExercise from '@/components/AddExercise/AddExercise';
import ExercisesProvider from '@/components/ExercisesProvider/ExercisesProvider';
import ExerciseAccordion from '@/components/Accordion/Accordion';
export default function Home() {
  return (
    <main>
      <div className='wrapper'>
        <ExercisesProvider>
          <ExerciseAccordion />
          <AddExercise />
        </ExercisesProvider>
      </div>
    </main>
  );
}
