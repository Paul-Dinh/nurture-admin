import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import {
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import instance from '../../api/AxiosConfig';
import { loadingOff, loadingOn } from '../../features/loader/loaderSlice';
import styles from './CreateAdminManagement.module.css';

CreateAdminManagement.propTypes = {};

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

function CreateAdminManagement({
  isOpen,
  setOpenUpdateForm,
  selectedRow,
}: {
  isOpen: boolean;
  setOpenUpdateForm: (open: boolean) => void;
  selectedRow: TableRowData;
}) {
  const handleClose = () => setOpenUpdateForm(false);

  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const schema = yup
    .object({
      username: yup.string().required('This field is required.'),
      firstName: yup.string().required('This field is required.'),
      lastName: yup.string().required('This field is required.'),
      email: yup.string().required('Email is required').email('Invalid email'),
      status: yup.string().required('This field is required.'),
      password: yup.string().required('Please enter password'),
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

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (selectedRow) {
      reset(selectedRow);
      setTitle(selectedRow.title); // Set the form values to the existing data
    }
  }, [selectedRow, reset]);

  const USER_TOKEN = localStorage.getItem('accessToken');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const AuthStr = 'Bearer ' + USER_TOKEN;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitOnClick = async (data: any) => {
    dispatch(loadingOn());

    await instance
      .post('admins/admins', data, {
        headers: { Authorization: AuthStr },
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
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
                Create Admin Management
              </Typography>
              <button onClick={handleClose}>
                <CloseIcon sx={{ cursor: 'pointer' }} />
              </button>
            </div>

            <Divider />
            <form
              onSubmit={handleSubmit(handleSubmitOnClick)}
              // onSubmit={handleSubmit(onSubmit)}
              className={styles.form}
            >
              <div className={styles.form_control}>
                <FormLabel
                  style={{ marginTop: '20px', marginBottom: '6px' }}
                  error={!!errors.username}
                >
                  Username
                </FormLabel>
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  {...register('username')}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
              </div>

              <div className={styles.form_group}>
                <div
                  className={styles.form_control}
                  style={{ width: '49%' }}
                >
                  <FormLabel
                    error={!!errors.firstName}
                    style={{ marginBottom: '6px' }}
                  >
                    First Name
                  </FormLabel>
                  <TextField
                    {...register('firstName')}
                    id='outlined-basic'
                    variant='outlined'
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                </div>

                <div
                  className={styles.form_control}
                  style={{ width: '49%' }}
                >
                  <FormLabel
                    error={!!errors.lastName}
                    style={{ marginBottom: '6px' }}
                  >
                    Last Name
                  </FormLabel>
                  <TextField
                    {...register('lastName')}
                    id='outlined-basic'
                    variant='outlined'
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                    value={title}
                  />
                </div>
              </div>

              <div className={styles.form_control}>
                <FormLabel
                  style={{ marginBottom: '6px' }}
                  error={!!errors.email}
                >
                  Email
                </FormLabel>
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </div>

              <div className={styles.form_control}>
                <FormLabel style={{ marginBottom: '6px' }}>Status</FormLabel>
                <FormControl>
                  <Select {...register('status')}>
                    <MenuItem value={'active'}>Active</MenuItem>
                    <MenuItem value={'inactive'}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div
                className={styles.form_control}
                style={{ marginLeft: '0px' }}
              >
                <FormLabel
                  error={!!errors.password}
                  style={{ marginBottom: '6px' }}
                >
                  Password
                </FormLabel>
                <OutlinedInput
                  {...register('password')}
                  placeholder='Password'
                  id='outlined-adornment-password'
                  type={showPassword ? 'text' : 'password'}
                  error={!!errors.password}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
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

export default CreateAdminManagement;
