import Admin from '../pages/Admin.tsx';
import Article from '../pages/Article.tsx';
import Categories from '../pages/Categories.tsx';
import Static from '../pages/Static.tsx';
import PD from '../pages/PD.tsx';
import ComputerOutlinedIcon from '@mui/icons-material/Computer';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

const data = [
  {
    id: 0,
    label: 'Static Content',
    icon: <ComputerOutlinedIcon />,
    component: <Static />,
    path: '/static',
    page: 'static-content',
    f_type: '',
  },
  {
    id: 1,
    label: 'Admin Management',
    icon: <PeopleOutlineIcon />,
    component: <Admin />,
    path: '/admin',
    page: 'admins',
    f_type: '',
  },
  {
    id: 2,
    label: 'Article',
    icon: <ArticleOutlinedIcon />,
    component: <Article />,
    path: '/article',
    page: 'articles',
    f_type: 'article',
  },
  {
    id: 3,
    label: 'PD Session',
    icon: <FeedOutlinedIcon />,
    component: <PD />,
    path: '/pd',
    page: 'articles',
    f_type: 'pd',
  },
  {
    id: 4,
    label: 'Category',
    icon: <CategoryOutlinedIcon />,
    component: <Categories />,
    path: '/category',
    page: 'categories',
    f_type: '',
  },
];

export default data;
