import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CSSObject, Theme, styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Button } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import data from '../../data/data';
import Filter from '../Filter/Filter';
import InfoBar from '../InfoBar/InfoBar';
import SearchBar from '../SearchBar/SearchBar';
import './SideBar.css';
import { useDispatch, useSelector } from 'react-redux';
import instance from '../../api/AxiosConfig';
import { setBody } from '../../features/body/bodySlice';
import { currentPage, setCurrentPage } from '../../features/currentPage/currentPageSlice';
import { sideBarOff, sideBarOn } from '../../features/margin/marginSlice';
import CreateAdminManagement from '../CreateAdminManagement/CreateAdminManagement';
import CreateArticle from '../CreateArticle/CreateArticle';
import CreateCategory from '../CreateCategory/CreateCategory';
import CreatePD from '../CreatePD/CreatePD';
import CreateStaticContent from '../CreateStaticContent/CreateStaticContent';
import { setCurrentPageName } from '../../features/currentPageName/currentPageNameSlice';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 0),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface TextItem {
  id: number;
  path: string;
  label: string;
  icon: React.ReactNode;
  page: string;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState<string>();
  const dispatch = useDispatch();
  const currentPageName = useSelector(currentPage);

  const [openCreateStatic, setOpenCreateStatic] = useState(false);
  const [openCreateAdmin, setOpenCreateAdmin] = useState(false);
  const [openCreateArticle, setOpenCreateArticle] = useState(false);
  const [openCreatePD, setOpenCreatePD] = useState(false);
  const [openCreateCategory, setOpenCreateCategory] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreateForm = (name: any) => {
    if (name === 'Static Content') setOpenCreateStatic(true);
    if (name === 'Admin Management') setOpenCreateAdmin(true);
    if (name === 'Article') setOpenCreateArticle(true);
    if (name === 'PD Session') setOpenCreatePD(true);
    if (name === 'Category') setOpenCreateCategory(true);
  };

  const [filter, setFilter] = useState('');

  React.useEffect(() => {
    const USER_TOKEN = localStorage.getItem('accessToken');
    const AuthStr = 'Bearer ' + USER_TOKEN;

    instance
      .get(`admins/${currentPageName}?${filter}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => dispatch(setBody(response.data.data)))
      .catch((err) => console.log(err));
  }, [filter]);

  const handleSearchChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position='fixed'
          open={open}
          sx={{
            backgroundColor: '#ffffff',
            color: '#2f2f2f',
          }}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={() => {
                handleDrawerOpen();
                dispatch(sideBarOn());
              }}
              edge='start'
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <div className='searchbar'>
              <Typography
                variant='h6'
                noWrap
                component='div'
              >
                {name}
              </Typography>
              <div className='search-filter'>
                <SearchBar onSubmit={handleSearchChange} />
                <Filter />
              </div>
              <Button
                variant='contained'
                onClick={() => handleCreateForm(name)}
              >
                Create {name}
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          open={open}
        >
          <DrawerHeader>
            <div className='nw'>
              <Typography
                variant='h6'
                noWrap
                component='div'
              >
                NurtureWave
              </Typography>
              <IconButton
                onClick={() => {
                  handleDrawerClose();
                  dispatch(sideBarOff());
                }}
              >
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
          </DrawerHeader>

          <Divider />
          <List>
            {data.map((text: TextItem) => (
              <NavLink
                key={text.id}
                style={{ textDecoration: 'none' }}
                to={text.path}
                onClick={() => {
                  setName(text.label);
                  dispatch(setCurrentPage(text.page));
                  dispatch(setCurrentPageName(text.label));
                }}
              >
                <ListItem
                  key={text.id}
                  disablePadding
                  sx={{ display: 'block' }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {text.icon}
                    </ListItemIcon>
                    <ListItemText
                      secondary={text.label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
          </List>
          <Divider />
          <Box>
            <InfoBar />
          </Box>
        </Drawer>
        <Box
          component='main'
          className={`${openedMixin} ${open ? closedMixin : ''}`}
          sx={{
            flexGrow: 1,
            p: 3,
            height: '64px',
          }}
        >
          <DrawerHeader />
        </Box>
      </Box>
      <CreateStaticContent
        isOpen={openCreateStatic}
        setOpenUpdateForm={setOpenCreateStatic}
        selectedRow={{}}
      />
      <CreateAdminManagement
        isOpen={openCreateAdmin}
        setOpenUpdateForm={setOpenCreateAdmin}
        selectedRow={{}}
      />
      <CreateArticle
        isOpen={openCreateArticle}
        setOpenUpdateForm={setOpenCreateArticle}
        selectedRow={{}}
      />
      <CreatePD
        isOpen={openCreatePD}
        setOpenUpdateForm={setOpenCreatePD}
        selectedRow={{}}
      />
      <CreateCategory
        isOpen={openCreateCategory}
        setOpenUpdateForm={setOpenCreateCategory}
        selectedRow={{}}
      />
    </>
  );
}
