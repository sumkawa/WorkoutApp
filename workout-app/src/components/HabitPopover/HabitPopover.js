'use client';
import React from 'react';
import { PlusIcon, Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';
import { Plus } from 'react-feather';
import * as Dialog from '@radix-ui/react-dialog';

function HabitPopover() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [habitTitle, setHabitTitle] = React.useState('');
  const [activity, setActivity] = React.useState('');

  return (
    <div className='popover-container'>
      <Dialog.Root>
        <Dialog.Trigger>
          <PlusIcon width='25' height='25' />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='PopoverDialogOverlay'>
            <Dialog.Content className='PopoverDialogContent'>
              <div class='wrapper'>
                <div class='box one'>First Box</div>
                <div class='box two'>Second Box</div>
                <div class='box three'>Third Box</div>
                <div class='box four'>Fourth Box</div>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>

      {/* // <div className='habit-form'>
        //   <form>
        //     <div className='habit-form-header'>
        //       <div class='form__group field'>
        //         <input
        //           type='input'
        //           class='form__field header'
        //           placeholder='Name'
        //           value={habitTitle}
        //           onChange={(event) => {
        //             setHabitTitle(event.target.value);
        //           }}
        //           name='name'
        //           id='name'
        //           required
        //         />
        //         <label for='name' class='form__label'>
        //           Habit Name
        //         </label>
        //       </div>
        //     </div>
        //   </form>
        // </div> */}
    </div>
  );
}

export default HabitPopover;
