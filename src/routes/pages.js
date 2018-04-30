// material-ui-icons
import Add from 'material-ui-icons/Add';
import HomeIcon from 'material-ui-icons/Home';
import PersonAdd from 'material-ui-icons/PersonAdd';
import Person from 'material-ui-icons/Person';
import Fingerprint from 'material-ui-icons/Fingerprint';

import Home from '../views/Home';
import Login from '../views/Login';
import Logout from '../views/Logout';
import Register from '../views/Register';
import AddTrip from '../views/AddTrip';

const pagesRoutes = [
  {
    path: '/',
    name: 'Home Page',
    short: 'home',
    mini: 'HP',
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
    path: '/register',
    name: 'Register Page',
    short: 'register',
    mini: 'RP',
    icon: PersonAdd,
    component: Register
  }
];

const authPagesRoutes = [
  {
    path: '/',
    name: 'Home Page',
    short: 'home',
    mini: 'RP',
    icon: HomeIcon,
    component: Home
  },
  {
    path: '/account',
    name: 'Account Page',
    short: 'myAccount',
    mini: 'LP',
    icon: Person,
    component: Logout
  },
  {
    path: '/addtrip',
    name: 'Add Trip Page',
    short: 'addTrip',
    mini: 'TP',
    icon: Add,
    component: AddTrip
  }
];

export { pagesRoutes, authPagesRoutes };
