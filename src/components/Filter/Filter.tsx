import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import instance from '../../api/AxiosConfig';
import { useDispatch } from 'react-redux';
import { loadingOff, loadingOn } from '../../features/loader/loaderSlice';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { reset } = useForm();
  // const { reminder, setReminder } = useState(false);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  // const [defaultChecked, setDefaultChecked] = useState(true);

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleClear = async () => {
  //   setDefaultChecked(false);
  // };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleShowOnClick = async (data: any) => {
    dispatch(loadingOn());

    const updateData = {
      title: data.title,
      category: data.category,
      slug: data.slug,
      required: data.required,
      status: data.status,
    };
    await instance
      .post('admins/static-content', updateData, {
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

  const USER_TOKEN = localStorage.getItem('accessToken');
  const AuthStr = 'Bearer ' + USER_TOKEN;

  useEffect(() => {
    async function handleFilter() {
      await instance
        .get('admins/static-content?page=1&limit=25', {
          headers: { Authorization: AuthStr },
        })
        .then(function (response) {
          setData(response.data.data);
          // console.log(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // console.log(data);
    handleFilter();
  }, [AuthStr]);

  return (
    <div>
      <Button
        id='fade-button'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        variant='contained'
        sx={{
          background: 'rgb(241, 241, 241)',
          color: 'grey',
          height: '40px',
          marginLeft: '10px',
          border: '1px solid #b3b9c4',
          ':hover': {
            background: 'rgb(241, 241, 241)',
            border: '1px solid rgb(115,132,150)',
          },
        }}
        onClick={handleClick}
      >
        <FilterAltOutlinedIcon /> Filter
      </Button>
      <Menu
        id='fade-menu'
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <FormGroup
          sx={{
            display: 'block',
            height: '50px',
          }}
        >
          <Typography variant='Bold_14'>Filter </Typography>
          {/* <Select> */}
          {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
          {/* {data.map((item: any) => (
              <FormControlLabel
                control={<Checkbox />}
                label='Required'
                key={item.id}
                value={item.category}
              >
                {item.category}
              </FormControlLabel>
            ))}
          </Select> */}
          <FormControlLabel
            control={<Checkbox />}
            label='Title'
          />
          <FormControlLabel
            control={<Checkbox />}
            label='Category'
          />
        </FormGroup>
        <Button>Clear All</Button>
        <Button onClick={handleShowOnClick}>Show</Button>
      </Menu>
    </div>
  );
}
