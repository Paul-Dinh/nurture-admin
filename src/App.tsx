// import axios from 'axios';
// import { useEffect, useState } from 'react';
import './App.css';
// import Login from './components/Login/Login';
// import TableContent from './components/Table/TableContent';
import './App.css';
// import Sidebar from './components/SideBar/SideBar.tsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import PrivateRoute from './routes/PrivateRoute';
// import RouteMenu from './routes/RouteMenu';
import Admin from './pages/Admin.tsx';
import Static from './pages/Static.tsx';
// import RouteMenu from './routes/RouteMenu.tsx';
import Article from './pages/Article.tsx';
import PD from './pages/PD.tsx';
import Categories from './pages/Categories.tsx';
import ThemeProvider from './theme/ThemeProvider.tsx';
import DraftContainer from './pages/draft/DraftContainer.tsx';
// import { Button, Stack } from '@mui/material';
// import CreateStaticContent from './components/CreateStaticContent/CreateStaticContent.tsx';

function App() {
  // const USER_TOKEN = localStorage.getItem('accessToken');

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [body, setBody] = useState([]);
  // const AuthStr = 'Bearer ' + USER_TOKEN;

  // useEffect(() => {
  //   axios
  //     .get('https://dev-api.nurture.vinova.sg/api/v1/admins/static-content', {
  //       headers: { Authorization: AuthStr },
  //     })
  //     .then((response) => setBody(response.data.data))
  //     .catch((err) => console.log(err));
  //   console.log(1);
  // }, [AuthStr]);

  // useEffect(() => {
  //   axios
  //     .post(
  //       'https://dev-api.nurture.vinova.sg/api/v1/admins/auth/refresh-access-token',
  //       { refreshToken: localStorage.getItem('refreshToken') },
  //       {
  //         headers: { Authorization: AuthStr },
  //       },
  //     )
  //     .then((response) => setBody(response.data.data.username))
  //     .catch((err) => console.log(err));
  // }, [AuthStr]);

  return (
    <ThemeProvider>
      <div className='App'>
        {/* <Button>AAAA</Button> */}
        {/* <Stack
          direction={'row'}
          gap={2}
        >
          <p>aaaaa</p>
          <p>bbbb</p>
        </Stack> */}
        <BrowserRouter>
          <Routes>
            <Route
              path='draft/*'
              element={<DraftContainer />}
            ></Route>
            <Route
              path='/'
              element={<Login />}
            ></Route>
            <Route
              path='/login'
              element={<Login />}
            ></Route>
            <Route
              path='/static'
              element={
                <PrivateRoute>
                  <Static />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path='/admin'
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path='/article'
              element={
                <PrivateRoute>
                  <Article />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path='/pd'
              element={
                <PrivateRoute>
                  <PD />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path='/categories'
              element={
                <PrivateRoute>
                  <Categories />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
