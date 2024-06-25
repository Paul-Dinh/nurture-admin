import { yupResolver } from '@hookform/resolvers/yup';
import CloseIcon from '@mui/icons-material/Close';
import {
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  FormControl,
  FormLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import instance from '../../api/AxiosConfig';
import { setBody } from '../../features/body/bodySlice';
import { loadingOff, loadingOn } from '../../features/loader/loaderSlice';
import styles from './CreateCategory.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TableRowData = Record<string, any>;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  borderRadius: 1,
};

function CreateCategory({
  isOpen,
  setOpenUpdateForm,
  selectedRow,
}: {
  isOpen: boolean;
  setOpenUpdateForm: (open: boolean) => void;
  selectedRow: TableRowData;
}) {
  const handleClose = () => setOpenUpdateForm(false);
  const [statusValue, setStatusValue] = useState('');
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleStatusValueChange = (e: { target: { value: SetStateAction<string> } }) => {
    setStatusValue(e.target.value);
  };

  const schema = yup
    .object({
      title: yup.string().required('This field is required.'),
      name: yup.string().required('This field is required.'),
      status: yup.string().required('This field is required.'),
      image: yup.string(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (selectedRow) {
      reset(selectedRow);
    }
  }, [selectedRow, reset]);

  const USER_TOKEN = localStorage.getItem('accessToken');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const AuthStr = 'Bearer ' + USER_TOKEN;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitOnClick = async (data: any) => {
    dispatch(loadingOn());

    const updateData = {
      title: data.title,
      name: data.name,
      status: data.status,
      image:
        'https://s3.ap-southeast-1.amazonaws.com/nurturewave-be-dev/uploads%2Fimages%2F0b8821d6-1a35-4986-af30-232f74a04b51_download+%282%29.jpeg',
    };

    await instance
      .post('admins/categories', updateData, {
        headers: { Authorization: AuthStr },
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    await instance
      .get('admins/categories', {
        headers: { Authorization: AuthStr },
        params: { limit: 25, page: 1 },
      })
      .then((response) => dispatch(setBody(response.data.data)))
      .catch((err) => console.log(err));

    setOpenUpdateForm(false);
    dispatch(loadingOff());
    reset();
  };

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <div className={styles.heading}>
              <Typography
                id='transition-modal-title'
                variant='h6'
                component='h2'
              >
                Create Category
              </Typography>
              <button onClick={handleClose}>
                <CloseIcon sx={{ cursor: 'pointer' }} />
              </button>
            </div>

            <Divider />
            <form
              onSubmit={handleSubmit(handleSubmitOnClick)}
              className={styles.form}
            >
              <div className={styles.form_control}>
                <FormLabel
                  style={{ marginTop: '20px', marginBottom: '6px' }}
                  error={!!errors.title}
                >
                  Title
                </FormLabel>
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  {...register('title')}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              </div>

              <div className={styles.form_control}>
                <FormLabel
                  error={!!errors.name}
                  style={{ marginBottom: '6px' }}
                >
                  Name
                </FormLabel>
                <TextField
                  {...register('name')}
                  id='outlined-basic'
                  variant='outlined'
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </div>

              <div className={styles.form_control}>
                <FormLabel
                  error={!!errors.status}
                  style={{ marginBottom: '6px' }}
                >
                  Status
                </FormLabel>
                <FormControl error={!!errors.status}>
                  <Select
                    {...register('status')}
                    value={statusValue}
                    onChange={handleStatusValueChange}
                  >
                    <MenuItem value={'active'}>Active</MenuItem>
                    <MenuItem value={'inactive'}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className={styles.submit_btn}>
                <Button
                  variant='contained'
                  type='submit'
                >
                  Create
                </Button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default CreateCategory;
