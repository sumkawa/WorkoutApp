import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

import './styles.css';

function HabitDialog({ trigger, title, children }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='DialogOverlay'>
          <Dialog.Content className='DialogContent'>
            <Dialog.Close asChild>
              <button className='header-exit'>
                <ArrowLeftIcon />
              </button>
            </Dialog.Close>
            <Dialog.Title className='DialogTitle'>{title}</Dialog.Title>
            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default HabitDialog;
