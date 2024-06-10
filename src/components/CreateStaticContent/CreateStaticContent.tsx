import { yupResolver } from '@hookform/resolvers/yup';
import CloseIcon from '@mui/icons-material/Close';
import { Textarea } from '@mui/joy';
import {
  Backdrop,
  Box,
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
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styles from './CreateStaticContent.module.css';

CreateStaticContent.propTypes = {};

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
}: {
  isOpen: boolean;
  setOpenUpdateForm: (open: boolean) => void;
}) {
  const handleClose = () => setOpenUpdateForm(false);

  const [title, setTitle] = useState('');

  const schema = yup
    .object({
      title: yup.string().required('This field is required.'),
      slug: yup.string().required('This field is required.'),
      category: yup.string().required('This field is required.'),
      status: yup.string().required('This field is required.'),
      required: yup.boolean(),
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
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
                Create Static Content
              </Typography>
              <button onClick={handleClose}>
                <CloseIcon sx={{ cursor: 'pointer' }} />
              </button>
            </div>

            <form
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
                  sx={{
                    '& input:hover': { border: 'none' },
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#70ba2b',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: '1px solid #70ba2b',
                    },
                  }}
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
                    <Select {...register('category')}>
                      <MenuItem value={'Term'}>Term</MenuItem>
                      <MenuItem value={'Payment Policy'}>Payment Policy</MenuItem>
                      <MenuItem value={'Private & Security'}>Private & Security</MenuItem>
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
                  <Select {...register('status')}>
                    <MenuItem value={'Show'}>Show</MenuItem>
                    <MenuItem value={'Hide'}>Hide</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div
                className={styles.form_control}
                style={{ marginLeft: '16px' }}
              >
                {/* <FormGroup> */}
                <FormControlLabel
                  control={<Checkbox />}
                  label='Required'
                  {...register('required')}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label='Has content'
                  {...register('hasContent')}
                />
                {/* </FormGroup> */}
              </div>

              <div className={styles.form_control}>
                <FormLabel style={{ marginBottom: '6px' }}>Content</FormLabel>
                <Textarea
                  minRows={5}
                  sx={{
                    '--Textarea-focusedInset': 'var(--any, )',
                    '--Textarea-focusedThickness': '1px',
                    '--Textarea-focusedHighlight': 'rgba(13,110,253,.25)',
                    '&::before': {
                      transition: 'box-shadow .15s ease-in-out',
                    },
                    '&:focus-within': {
                      borderColor: '#86b7fe',
                    },
                  }}
                  {...register('content')}
                />
              </div>

              <div className={styles.submit_btn}>
                <input type='submit' />
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default CreateStaticContent;
