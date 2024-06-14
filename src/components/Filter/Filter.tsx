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

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label='Label'
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            label='Required'
          />
          <FormControlLabel
            disabled
            control={<Checkbox />}
            label='Disabled'
          />
        </FormGroup>
      </Menu>
    </div>
  );
}
