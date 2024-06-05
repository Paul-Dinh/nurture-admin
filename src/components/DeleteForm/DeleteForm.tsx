import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import styles from './DeleteForm.module.css';

DeleteForm.propTypes = {};

function DeleteForm({ isOpen, index }: { isOpen: boolean; index: number }) {
  console.log(isOpen, index);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };

  const [open, setOpen] = useState(isOpen);
  console.log(open);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <svg
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              width='40'
              height='40'
              rx='20'
              fill='rgb(232, 57, 57)'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M20 11C15.0294 11 11 15.0294 11 20C11 24.9706 15.0294 29 20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11ZM9 20C9 13.9249 13.9249 9 20 9C26.0751 9 31 13.9249 31 20C31 26.0751 26.0751 31 20 31C13.9249 31 9 26.0751 9 20Z'
              fill='white'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M20.2581 16.0243C19.7926 15.9445 19.3138 16.0319 18.9066 16.2713C18.4994 16.5106 18.1901 16.8863 18.0333 17.3318C17.8501 17.8528 17.2791 18.1266 16.7582 17.9433C16.2372 17.7601 15.9634 17.1891 16.1467 16.6682C16.4601 15.777 17.0789 15.0256 17.8933 14.547C18.7077 14.0684 19.6652 13.8934 20.5962 14.0531C21.5273 14.2128 22.3718 14.6969 22.9801 15.4195C23.5883 16.1421 23.9213 17.0565 23.92 18.0009C23.9195 19.5313 22.7849 20.5419 21.9747 21.0821C21.5391 21.3725 21.1106 21.586 20.7949 21.7263C20.6356 21.7971 20.5015 21.8508 20.4049 21.8876C20.3565 21.9061 20.3173 21.9203 20.2887 21.9305L20.254 21.9427L20.2429 21.9464L20.239 21.9478L20.2375 21.9483C20.2372 21.9484 20.2362 21.9487 19.92 21L20.2362 21.9487C19.7123 22.1233 19.146 21.8402 18.9713 21.3162C18.7968 20.7926 19.0795 20.2267 19.6027 20.0517L19.6014 20.0521C19.6015 20.0521 19.6016 20.052 19.6027 20.0517L19.6187 20.0461C19.6341 20.0406 19.6593 20.0314 19.6929 20.0186C19.7603 19.9929 19.8606 19.9529 19.9826 19.8987C20.2294 19.789 20.5509 19.6275 20.8653 19.4179C21.5549 18.9582 21.92 18.4691 21.92 18L21.92 17.9985C21.9207 17.5262 21.7542 17.0689 21.4501 16.7075C21.1459 16.3462 20.7236 16.1042 20.2581 16.0243Z'
              fill='white'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M19 25C19 24.4477 19.4477 24 20 24H20.01C20.5623 24 21.01 24.4477 21.01 25C21.01 25.5523 20.5623 26 20.01 26H20C19.4477 26 19 25.5523 19 25Z'
              fill='white'
            />
          </svg>

          <p className={styles.heading}>Delete Static Content ?</p>
          <p className={styles.description}>Are you sure you want to delete this item?</p>
          <div className={styles.btns}>
            <Button
              variant='outlined'
              className={`${styles.btn} ${styles.btn__cancel}`}
              color='info'
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              className={styles.btn}
              color='error'
            >
              Delete
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default DeleteForm;
