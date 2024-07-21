'use client';
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './styles.css';
import { ExercisesContext } from '@/components/ExercisesProvider/ExercisesProvider';
import ExerciseTable from '../ExerciseTable';
function ExerciseAccordion() {
  const { exercises, setExercises } = React.useContext(ExercisesContext);

  const handleInputChange = (exerciseIndex, setIndex, field, value) => {
    const updatedExercises = exercises.map((exercise, exIndex) => {
      if (exIndex === exerciseIndex) {
        const updatedSets = exercise.sets.map((set, stIndex) => {
          if (stIndex === setIndex) {
            return { ...set, [field]: value };
          }
          return set;
        });
        return { ...exercise, sets: updatedSets };
      }
      return exercise;
    });
    setExercises(updatedExercises);
  };
  const defaultValues = exercises.map((exercise, index) => `item-${index}`);
  console.log(defaultValues);
  return (
    <Accordion.Root
      className='AccordionRoot'
      type='multiple'
      defaultValue={defaultValues}
    >
      {exercises.map((exercise, index) => (
        <Accordion.Item
          className='AccordionItem'
          value={`item-${index}`}
          key={index}
        >
          <AccordionTrigger>{exercise.name}</AccordionTrigger>
          <AccordionContent>
            <ExerciseTable
              exercise={exercise}
              onChange={handleInputChange}
              exerciseIndex={index}
            ></ExerciseTable>
          </AccordionContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className='AccordionHeader'>
      <Accordion.Trigger
        className={classNames('AccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className='AccordionChevron' aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className='AccordionContentText'>{children}</div>
    </Accordion.Content>
  )
);

export default ExerciseAccordion;
