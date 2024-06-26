import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Typography } from '@mui/material';
import './InfoBar.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sideBarOff } from '../../features/margin/marginSlice';

function InfoBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = localStorage.getItem('username');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
    navigate('/login');
    dispatch(sideBarOff());
  };

  return (
    <div className='info'>
      <Avatar sx={{ bgcolor: grey }}>A</Avatar>
      <Typography
        variant='Reg_16'
        sx={{ marginLeft: '20px' }}
      >
        {user}
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
