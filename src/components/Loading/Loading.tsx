import { Box, CircularProgress, Modal } from '@mui/material';

Loading.propTypes = {};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'none',
  color: '#fff',
  fontSize: '30px',
  outLine: 'none',
};

function Loading({ open }: { open: boolean }) {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <CircularProgress sx={{ color: '#fff' }} />
        </Box>
      </Modal>
    </div>
  );
}

export default Loading;
