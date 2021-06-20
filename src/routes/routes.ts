import Home from '../pages/Home';
import Hello from '../pages/Hello';
import Error from '../pages/Error';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/hello',
    exact: true,
    component: Hello
  },
  {
    path: '',
    exact: false,
    component: Error
  }
];

export default routes;
