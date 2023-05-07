import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import LayoutComponent from '../components/LayoutComponent';
import Dashboard from '../views/Dashboard';
import Funds from '../views/Funds';
import Campaigns from '../views/Campaigns';
import Profile from '../views/Profile';
import Settings from '../views/Settings';
import Crisp from '../views/Crisp';
import Login from '../views/Login';
import FAQ from '../views/FAQ';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '/main',
        element: <Dashboard />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'funds',
        element: <Funds />
      },
      {
        path: 'campaigns',
        element: <Campaigns />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'crisp',
        element: <Crisp />
      }
    ]
  },
  {
    path: '/frequentlyaskedquestions',
    element: <FAQ />
  }
]);

export default router;
