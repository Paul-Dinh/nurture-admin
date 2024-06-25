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
  TextareaAutosize,
  Typography,
} from '@mui/material';
import { SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import instance from '../../api/AxiosConfig';
import { loadingOff, loadingOn } from '../../features/loader/loaderSlice';
import styles from './CreateArticle.module.css';
CreateArticle.propTypes = {};

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

function CreateArticle({
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
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      categoryId: yup.string().required('This field is required.'),
      timeToRead: yup.string().required('This field is required.'),
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
    }
  }, [selectedRow, reset]);

  const USER_TOKEN = localStorage.getItem('accessToken');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [body, setBody] = useState('');
  const AuthStr = 'Bearer ' + USER_TOKEN;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitOnClick = async (data: any) => {
    dispatch(loadingOn());

    const updateData = {
      title: data.title,
      category: data.category,
      author: data.author,
      timeToRead: data.timeToRead,
      status: data.status,
      categoryId: data.categoryId,
      hasContent: data.hasContent,
      content: data.content,
      picture:
        'https://s3.ap-southeast-1.amazonaws.com/nurturewave-be-dev/uploads%2Fimages%2F0b8821d6-1a35-4986-af30-232f74a04b51_download+%282%29.jpeg',
      type: 'article',
    };

    await instance
      .post('admins/articles', updateData, {
        headers: { Authorization: AuthStr },
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    dispatch(loadingOff());
    reset();
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    async function handleCategory() {
      await instance
        .get('admins/categories?page=1&limit=25', {
          headers: { Authorization: AuthStr },
        })
        .then(function (response) {
          setData(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    handleCategory();
  }, [AuthStr]);

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
                Create Article
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
                    <MenuItem value={'published'}>Published</MenuItem>
                    <MenuItem value={'unpublished'}>Unpublished</MenuItem>
                    <MenuItem value={'draft'}>Draft</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className={styles.form_control}>
                <FormLabel
                  error={!!errors.categoryId}
                  style={{ marginBottom: '6px' }}
                >
                  Category
                </FormLabel>
                <FormControl error={!!errors.categoryId}>
                  <Select
                    {...register('categoryId')}
                    value={categoryValue}
                    onChange={handleCategoryValueChange}
                  >
                    {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
                    {data.map((item: any) => (
                      <MenuItem
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div className={styles.form_control}>
                <FormLabel
                  error={!!errors.timeToRead}
                  style={{ marginBottom: '6px' }}
                >
                  Duration (Ex: 3 mins)
                </FormLabel>
                <TextField
                  {...register('timeToRead')}
                  id='outlined-basic'
                  variant='outlined'
                  error={!!errors.timeToRead}
                  helperText={errors.timeToRead?.message}
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
              {/* <Box mt={2}>
                <Button
                  variant='contained'
                  component='label'
                >
                  Upload File
                  <input
                    type='file'
                    hidden
                    onChange={handleFileChange}
                  />
                </Button>
                {file && (
                  <Typography
                    variant='body1'
                    component='p'
                  >
                    File chosen: {file}
                  </Typography>
                )}
              </Box> */}

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
    </div>
  );
}

export default CreateArticle;
