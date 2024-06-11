import { Link } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute.tsx';
// import Static from '../pages/Static.tsx';
// import Admin from '../pages/Admin.tsx';
// import { Article } from '@mui/icons-material';
// import PD from '../pages/PD.tsx';
// import Categories from '../pages/Categories.tsx';
import Sidebar from '../components/SideBar/SideBar.tsx';

function RouteMenu() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Sidebar />
      <Link to='/static'></Link>
      <Link to='/admin'></Link>
      <Link to='/article'></Link>
      <Link to='/pd'></Link>
      <Link to='/categories'></Link>

      {/* </BrowserRouter> */}
    </div>
  );
}

export default RouteMenu;
