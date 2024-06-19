import { yupResolver } from '@hookform/resolvers/yup';
import CloseIcon from '@mui/icons-material/Close';
import {
  Backdrop,
  Box,
  Button,
  Fade,
  FormControl,
  //   FormControlLabel,
  //   FormHelperText,
  FormLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
  Divider,
} from '@mui/material';
import { SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styles from './CreatePD.module.css';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
import Loading from '../Loading/Loading';
import instance from '../../api/AxiosConfig';
CreatePD.propTypes = {};

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

function CreatePD({
  isOpen,
  setOpenUpdateForm,
  selectedRow,
}: {
  isOpen: boolean;
  setOpenUpdateForm: (open: boolean) => void;
  selectedRow: TableRowData;
}) {
  const handleClose = () => setOpenUpdateForm(false);
  const [categoryValue, setCategoryValue] = useState('');
  const [statusValue, setStatusValue] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [title, setTitle] = useState('');
  const handleCategoryValueChange = (e: { target: { value: SetStateAction<string> } }) => {
    setCategoryValue(e.target.value);
  };
  const handleStatusValueChange = (e: { target: { value: SetStateAction<string> } }) => {
    setStatusValue(e.target.value);
  };

  const schema = yup
    .object({
      title: yup.string().required('This field is required.'),
      author: yup.string().required('This field is required.'),
      status: yup.string().required('This field is required.'),
      categoryID: yup.string().required('This field is required.'),
      timetoRead: yup.string().required('This field is required.'),
      picture: yup.string(),
      content: yup.string(),
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
      setTitle(selectedRow.title); // Set the form values to the existing data
    }
  }, [selectedRow, reset]);

  const [isLoading, setIsLoading] = useState(false);

  const USER_TOKEN = localStorage.getItem('accessToken');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [body, setBody] = useState('');
  const AuthStr = 'Bearer ' + USER_TOKEN;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitOnClick = async (data: any) => {
    setIsLoading(true);
    await instance
      .post('admins/articles', data, {
        headers: { Authorization: AuthStr },
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    setIsLoading(false);
    console.log(data);
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
                Create PD Session
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
                  error={!!errors.author}
                  style={{ marginBottom: '6px' }}
                >
                  Author
                </FormLabel>
                <TextField
                  {...register('author')}
                  id='outlined-basic'
                  variant='outlined'
                  error={!!errors.author}
                  helperText={errors.author?.message}
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
                    <MenuItem value={'Published'}>Published</MenuItem>
                    <MenuItem value={'Unpublished'}>Unpublished</MenuItem>
                    <MenuItem value={'Draft'}>Draft</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className={styles.form_control}>
                <FormLabel
                  error={!!errors.categoryID}
                  style={{ marginBottom: '6px' }}
                >
                  Category
                </FormLabel>
                <FormControl error={!!errors.categoryID}>
                  <Select
                    {...register('categoryID')}
                    value={categoryValue}
                    onChange={handleCategoryValueChange}
                  >
                    <MenuItem value={'Postnatal care'}>Postnatal care</MenuItem>
                    <MenuItem value={'Nutrition'}>Nutrition</MenuItem>
                    <MenuItem value={'Labour'}>Labour</MenuItem>
                    <MenuItem value={'Prenatal'}>Prenatal</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className={styles.form_control}>
                <FormLabel
                  error={!!errors.timetoRead}
                  style={{ marginBottom: '6px' }}
                >
                  Duration (Ex: 3 mins)
                </FormLabel>
                <TextField
                  {...register('timetoRead')}
                  id='outlined-basic'
                  variant='outlined'
                  error={!!errors.timetoRead}
                  helperText={errors.timetoRead?.message}
                />
              </div>
              {/* 
              <div className={styles.form_control}>
                <FormLabel
                  error={!!errors.picture}
                  style={{ marginBottom: '6px' }}
                >
                  Image
                </FormLabel>
              </div> */}

              <div className={styles.form_control}>
                <FormLabel style={{ marginBottom: '6px' }}>Content</FormLabel>

                <TextareaAutosize
                  minRows={10}
                  {...register('content')}
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
      <Loading open={isLoading} />
    </div>
  );
}

export default CreatePD;
