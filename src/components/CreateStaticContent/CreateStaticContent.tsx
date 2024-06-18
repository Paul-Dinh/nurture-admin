import { yupResolver } from '@hookform/resolvers/yup';
import CloseIcon from '@mui/icons-material/Close';
import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  Fade,
  FormControl,
  FormControlLabel,
  FormHelperText,
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
import * as yup from 'yup';
import styles from './CreateStaticContent.module.css';
import axios from 'axios';
import ConfirmUpdateForm from '../ConfirmUpdateForm/ConfirmUpdateForm';

CreateStaticContent.propTypes = {};

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

function CreateStaticContent({
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
  const [categoryValue, setCategoryValue] = useState('');
  const [statusValue, setStatusValue] = useState('');
  const [openConfirmUpdateForm, setOpenConfirmUpdateForm] = useState(false);
  // const [data, setData] = useState({});

  const handleCategoryValueChange = (e: { target: { value: SetStateAction<string> } }) => {
    setCategoryValue(e.target.value);
  };
  const handleStatusValueChange = (e: { target: { value: SetStateAction<string> } }) => {
    setStatusValue(e.target.value);
  };

  const schema = yup
    .object({
      title: yup.string().required('This field is required.'),
      slug: yup.string().required('This field is required.'),
      category: yup.string().required('This field is required.'),
      status: yup.string().required('This field is required.'),
      isRequired: yup.boolean(),
      hasContent: yup.boolean(),
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
      setTitle(selectedRow.title);
      setCategoryValue(selectedRow.category);
      setStatusValue(selectedRow.status);
    }
  }, [selectedRow, reset]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [isLoading, setIsLoading] = useState(false);

  const USER_TOKEN = localStorage.getItem('accessToken');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [body, setBody] = useState('');
  const AuthStr = 'Bearer ' + USER_TOKEN;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitOnClick = async (data: any) => {
    setIsLoading(true);
    await instance
      .post('admins/static-content', data, {
        headers: { Authorization: AuthStr },
      })
      .then(function (response) {
        return response.data;
        // toast.success('Successed');
      })
      .then((data) => {
        return data;
        // localStorage.setItem('accessToken', data);
      })
      .catch(function (error) {
        console.log(error);
      });

    setIsLoading(false);
    console.log(data);

    const updateData = {
      title: data.title,
      category: data.category,
      status: data.status,
      isRequired: data.isRequired,
      hasContent: data.hasContent,
      content: data.content,
    };

    const USER_TOKEN = localStorage.getItem('accessToken');
    const AuthStr = 'Bearer ' + USER_TOKEN;

    axios
      .put(
        'https://dev-api.nurture.vinova.sg/api/v1/admins/static-content/' + selectedRow.slug,
        { ...updateData },
        {
          headers: { Authorization: AuthStr },
        },
      )
      .then((response) => console.log(response.data.data))
      .catch((err) => console.log(err));

    setOpenUpdateForm(false);
    reset();
  };

  const handleUpdateConfirm = () => {};

  return (
    <>
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
                Create Static Content
              </Typography>
              <button onClick={handleClose}>
                <CloseIcon sx={{ cursor: 'pointer' }} />
              </button>
            </div>
            <form
              // onSubmit={handleSubmit(onSubmit)}
              onSubmit={handleSubmit(onSubmit)}
              className={styles.form}
            >
              <div className={styles.form_control}>
                <FormLabel
                  style={{ marginBottom: '6px' }}
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
                  onChange={(e) => {
                    setTitle(e.target.value);
                    reset({ slug: e.target.value });
                  }}
                />
              </div>

              <div className={styles.form_group}>
                <div
                  className={styles.form_control}
                  style={{ width: '49%' }}
                >
                  <FormLabel
                    error={!!errors.slug}
                    style={{ marginBottom: '6px' }}
                  >
                    Slug
                  </FormLabel>
                  <TextField
                    {...register('slug')}
                    id='outlined-basic'
                    variant='outlined'
                    disabled
                    error={!!errors.slug}
                    helperText={errors.slug?.message}
                    value={title}
                    sx={{
                      '& input': { backgroundColor: '#eeecec' },
                      '& input:hover': { border: 'none' },
                    }}
                  />
                </div>

                <div
                  className={styles.form_control}
                  style={{ width: '49%' }}
                >
                  <FormLabel
                    error={!!errors.category}
                    style={{ marginBottom: '6px' }}
                  >
                    Category
                  </FormLabel>
                  <FormControl error={!!errors.category}>
                    <Select
                      {...register('category')}
                      value={categoryValue}
                      onChange={handleCategoryValueChange}
                    >
                      <MenuItem value={'Term'}>Term</MenuItem>
                      <MenuItem value={'Payment Policy'}>Payment Policy</MenuItem>
                      <MenuItem value={'Privacy & Security'}>Private & Security</MenuItem>
                    </Select>
                    <FormHelperText error={!!errors.category}>
                      {errors.category?.message}
                    </FormHelperText>
                  </FormControl>
                </div>
              </div>

              <div className={styles.form_control}>
                <FormLabel style={{ marginBottom: '6px' }}>Status</FormLabel>
                <FormControl>
                  <Select
                    {...register('status')}
                    value={statusValue}
                    onChange={handleStatusValueChange}
                  >
                    <MenuItem value={'Show'}>Show</MenuItem>
                    <MenuItem value={'Hide'}>Hide</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div
                className={styles.form_control}
                style={{ marginLeft: '16px' }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked={selectedRow.isRequired} />}
                  label='Required'
                  {...register('isRequired')}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked={selectedRow.hasContent} />}
                  label='Has content'
                  {...register('hasContent')}
                />
              </div>

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
                  // onClick={() => setOpenConfirmUpdateForm(true)}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>

      <ConfirmUpdateForm
        isOpen={openConfirmUpdateForm}
        setOpenConfirmUpdateForm={setOpenConfirmUpdateForm}
        handleUpdateConfirm={handleUpdateConfirm}
      />
    </>
  );
}

export default CreateStaticContent;
