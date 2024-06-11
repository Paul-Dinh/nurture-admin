import React from 'react';
// import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Typography } from '@mui/material';
import './InfoBar.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function InfoBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const USER_TOKEN = localStorage.getItem('accessToken');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [body, setBody] = useState('');
  const AuthStr = 'Bearer ' + USER_TOKEN;

  useEffect(() => {
    axios
      .post(
        'https://dev-api.nurture.vinova.sg/api/v1/admins/auth/refresh-access-token',
        { refreshToken: localStorage.getItem('refreshToken') },
        {
          headers: { Authorization: AuthStr },
        },
      )
      .then((response) => {
        setBody(response.data.data.admin.username);
      })
      .catch((err) => console.log(err));
  }, [AuthStr]);

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  };

  return (
    <div className='info'>
      <Avatar sx={{ bgcolor: grey }}>A</Avatar>
      <Typography
        variant='Reg_16'
        sx={{ marginLeft: '20px' }}
      >
        {body}
      </Typography>
      <Button
        id='fade-button'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon color='primary' />
      </Button>
      {/* <button onClick={handleClick}>
        <MoreHorizIcon color='primary' />
      </button> */}
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Change Password</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default InfoBar;
