import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { loadingOff, loadingOn } from '../../features/loader/loaderSlice';
import styles from './LoginForm.module.css';
import instance from '../../api/AxiosConfig';

function LoginForm() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      username: yup.string().required('This field is required.'),
      password: yup.string().required('This field is required.'),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmitOnclick = async (data: { username: string; password: string }) => {
    dispatch(loadingOn());

    instance
      .post('admins/auth/login', {
        username: data.username,
        password: data.password,
      })
      .then(function (response) {
        localStorage.setItem('username', response.data.data.admin.username);
        return response.data.data.tokens;
      })
      .then((tokens) => {
        localStorage.setItem('accessToken', tokens.accessToken);
        localStorage.setItem('refreshToken', tokens.refreshToken);
      })
      .catch(function (error) {
        console.log(error);
      });

    navigate('/static');
    dispatch(loadingOff());
    reset();
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit(handleSubmitOnclick)}
      >
        <FormLabel
          sx={{ margin: '14px 42px 6px', color: '#000', fontSize: '14px' }}
          error={!!errors.username}
        >
          Username or email
        </FormLabel>
        <TextField
          {...register('username')}
          id='outlined-basic'
          variant='outlined'
          placeholder='Username or email'
          sx={{
            margin: '0 42px',
          }}
          error={!!errors.username}
          helperText={errors.username && errors.username?.message}
        />

        <FormLabel
          sx={{ margin: '14px 42px 6px', color: '#000', fontSize: '14px' }}
          error={!!errors.password}
        >
          Password
        </FormLabel>
        <FormControl
          sx={{
            margin: '0 42px',
          }}
          variant='outlined'
        >
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
          <FormHelperText error={!!errors.password}>
            {errors.password && errors.password?.message}
          </FormHelperText>
        </FormControl>
        <div className={styles.btn}>
          <Button
            variant='contained'
            type='submit'
            sx={{ width: '150px', height: '32px', margin: '20px 30px' }}
          >
            Login
          </Button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
