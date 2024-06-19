import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Admin from './pages/Admin.tsx';
import Article from './pages/Article.tsx';
import Categories from './pages/Categories.tsx';
import PD from './pages/PD.tsx';
import Static from './pages/Static.tsx';
import DraftContainer from './pages/draft/DraftContainer.tsx';
import PrivateRoute from './routes/PrivateRoute';
import ThemeProvider from './theme/ThemeProvider.tsx';

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
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
              path='/category'
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
