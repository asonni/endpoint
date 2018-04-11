// material-ui-icons
import Add from 'material-ui-icons/Add';
import HomeIcon from 'material-ui-icons/Home';
import PersonAdd from 'material-ui-icons/PersonAdd';
import Fingerprint from 'material-ui-icons/Fingerprint';

import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import Pricing from '../views/Pricing';

const pagesRoutes = [
  {
    path: '/',
    name: 'Home Page',
    short: 'home',
    mini: 'RP',
    icon: HomeIcon,
    component: Home
  },
  {
    path: '/login',
    name: 'Login Page',
    short: 'login',
    mini: 'LP',
    icon: Fingerprint,
    component: Login
  },
  {
    path: '/Register',
    name: 'Register Page',
    short: 'register',
    mini: 'LP',
    icon: PersonAdd,
    component: Register
  },
  {
    path: '/pricing',
    name: 'Pricing Page',
    short: 'addTrip',
    mini: 'PP',
    icon: Add,
    component: Pricing
  },
  {
    redirect: true,
    path: '/',
    pathTo: '/',
    name: 'Home Page'
  }
];

export default pagesRoutes;
