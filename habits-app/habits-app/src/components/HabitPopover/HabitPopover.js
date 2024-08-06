'use client';
import React from 'react';
import { PlusIcon, ArrowRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import './styles.css';

import * as Dialog from '@radix-ui/react-dialog';

function HabitPopover() {
  const [habitTitle, setHabitTitle] = React.useState('');
  const [behavior, setBehavior] = React.useState('');
  const [time, setTime] = React.useState('');
  const [location, setLocation] = React.useState('');

  const wrapperRef = React.useRef(null);

  const scrollNext = () => {
    if (wrapperRef.current) {
      const { scrollLeft, clientWidth } = wrapperRef.current;
      wrapperRef.current.scrollTo({
        left: scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollLast = () => {
    if (wrapperRef.current) {
      const { scrollLeft, clientWidth } = wrapperRef.current;
      wrapperRef.current.scrollTo({
        left: scrollLeft - clientWidth,
        behavior: 'smooth',
      });
    }
  };

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        scrollNext();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className='popover-container'>
      <Dialog.Root>
        <Dialog.Trigger>
          <PlusIcon width='25' height='25' />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='PopoverDialogOverlay'>
            <Dialog.Content className='PopoverDialogContent'>
              <Dialog.Title>
                <VisuallyHidden.Root>Make your habit</VisuallyHidden.Root>
              </Dialog.Title>
              <Dialog.Description>
                <VisuallyHidden.Root>
                  Make your habit here. Click save when done.
                </VisuallyHidden.Root>
              </Dialog.Description>
              <div className='wrapper' ref={wrapperRef}>
                <div className='box one'>
                  <h1 className='animate-character'>Make your habit</h1>
                  <h2 className='secondary-text'>
                    First, give it a catchy title:
                  </h2>
                  <div className='form__group field'>
                    <input
                      type='input'
                      className='form__field'
                      placeholder='Name'
                      name='name'
                      id='name'
                      spellCheck={false}
                      required
                      value={habitTitle}
                      onChange={(event) => {
                        setHabitTitle(event.target.value);
                      }}
                    />
                    <label htmlFor='name' className='form__label'>
                      Name
                    </label>
                  </div>
                  <div className='footer'>
                    :)
                    <button
                      className='button'
                      onClick={scrollNext}
                      disabled={habitTitle === ''}
                    >
                      <ArrowRightIcon className='icon' width='35' height='35' />
                    </button>
                  </div>
                </div>

                <div className='box two'>
                  <h1 className='animate-character-second'>
                    Now let's define the behavior.
                  </h1>
                  <h2 className='secondary-text'>
                    Remember to make your behavior attractive, frictionless, and
                    easy.
                  </h2>
                  <div className='input-paragraph'>
                    {behavior === '' ? (
                      <div>I will [behavior] at [time] in [location]</div>
                    ) : (
                      <div>
                        I will <span className='behavior-text'>{behavior}</span>{' '}
                        at [time] in [location]
                      </div>
                    )}
                  </div>
                  <h3>
                    <div className='form__group__paragraph field'>
                      <input
                        type='input'
                        className='form__field__paragraph'
                        placeholder='put my running shoes on'
                        name='behavior'
                        id='behavior'
                        spellCheck={false}
                        required
                        value={behavior}
                        onChange={(event) => {
                          setBehavior(event.target.value);
                        }}
                      />
                      <label htmlFor='name' className='form__label__paragraph'>
                        Behavior
                      </label>
                    </div>
                  </h3>

                  <div className='footer'>
                    <button
                      className='button'
                      onClick={scrollLast}
                      disabled={habitTitle === ''}
                    >
                      <ArrowLeftIcon className='icon' width='35' height='35' />
                    </button>
                    <button
                      className='button'
                      onClick={scrollNext}
                      disabled={habitTitle === ''}
                    >
                      <ArrowRightIcon className='icon' width='35' height='35' />
                    </button>
                  </div>
                </div>

                <div className='box three'>
                  <h1 className='animate-character-second'>
                    Now let's set up your time.
                  </h1>
                  <h2 className='secondary-text'>
                    The more specific the time, the more routine the habit
                    becomes.
                  </h2>
                  <div className='input-paragraph'>
                    {time === '' ? (
                      <div>
                        I will <span className='behavior-text'>{behavior}</span>{' '}
                        at [time] in [location]
                      </div>
                    ) : (
                      <div>
                        I will <span className='behavior-text'>{behavior}</span>{' '}
                        at <span className='time-text'>{time}</span> in
                        [location]
                      </div>
                    )}
                  </div>
                  <h3>
                    <div className='form__group__paragraph field'>
                      <input
                        type='input'
                        className='form__field__paragraph'
                        placeholder='8 AM'
                        name='time'
                        id='time'
                        spellCheck={false}
                        required
                        value={time}
                        onChange={(event) => {
                          setTime(event.target.value);
                        }}
                      />
                      <label htmlFor='name' className='form__label__paragraph'>
                        Time
                      </label>
                    </div>
                  </h3>

                  <div className='footer'>
                    <button
                      className='button'
                      onClick={scrollLast}
                      disabled={habitTitle === ''}
                    >
                      <ArrowLeftIcon className='icon' width='35' height='35' />
                    </button>
                    <button
                      className='button'
                      onClick={scrollNext}
                      disabled={habitTitle === ''}
                    >
                      <ArrowRightIcon className='icon' width='35' height='35' />
                    </button>
                  </div>
                </div>
                <div className='box four'>
                  <h1 className='animate-character-second'>Location</h1>
                  <h2 className='secondary-text'>
                    Habits associated with specific locations are easily
                    remembered.
                  </h2>
                  <div className='input-paragraph'>
                    {location === '' ? (
                      <div>I will [behavior] at [time] in [location]</div>
                    ) : (
                      <div>
                        I will <span className='behavior-text'>{behavior}</span>{' '}
                        at <span className='time-text'>{time}</span> in{' '}
                        <span className='location-text'>{location}</span>
                      </div>
                    )}
                  </div>
                  <h3>
                    <div className='form__group__paragraph field'>
                      <input
                        type='input'
                        className='form__field__paragraph'
                        placeholder='the office'
                        name='location'
                        id='location'
                        spellCheck={false}
                        required
                        value={location}
                        onChange={(event) => {
                          setLocation(event.target.value);
                        }}
                      />
                      <label htmlFor='name' className='form__label__paragraph'>
                        Behavior
                      </label>
                    </div>
                  </h3>

                  <div className='footer'>
                    <button
                      className='button'
                      onClick={scrollLast}
                      disabled={habitTitle === ''}
                    >
                      <ArrowLeftIcon className='icon' width='35' height='35' />
                    </button>
                    <button
                      className='button'
                      onClick={scrollNext}
                      disabled={habitTitle === ''}
                    >
                      <ArrowRightIcon className='icon' width='35' height='35' />
                    </button>
                  </div>
                </div>

                <div className='box five'>
                  <h1 className='animate-character-second'>{habitTitle}</h1>
                  <div className='input-paragraph'>
                    {location === '' ? (
                      <div>I will [behavior] at [time] in [location]</div>
                    ) : (
                      <div className='confirmation-text'>
                        I will <span className='behavior-text'>{behavior}</span>{' '}
                        at <span className='time-text'>{time}</span> in{' '}
                        <span className='location-text'>{location}</span>
                      </div>
                    )}
                  </div>

                  <div className='footer-submission'>
                    <button className='button-submission' onClick={scrollNext}>
                      Make your habit
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default HabitPopover;
