import { Box, CircularProgress, Modal } from '@mui/material';

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
        disableAutoFocus={true}
      >
        <Box sx={style}>
          <CircularProgress sx={{ color: '#fff' }} />
        </Box>
      </Modal>
    </div>
  );
}

export default Loading;
