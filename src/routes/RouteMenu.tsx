import { Link } from 'react-router-dom';
import Sidebar from '../components/SideBar/SideBar.tsx';

function RouteMenu() {
  return (
    <div>
      <Sidebar />
      <Link to='/static'></Link>
      <Link to='/admin'></Link>
      <Link to='/article'></Link>
      <Link to='/pd'></Link>
      <Link to='/categories'></Link>
    </div>
  );
}

export default RouteMenu;
