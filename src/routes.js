import App from './app/app';
import HomePage from './app/components/HomePage';
//import LoginPage from './app/components/LoginPage';
import AdminPanel from './app/components/AdminPanel';
import AdminEntities from './app/components/AdminEntities';
import AddEntities from './app/components/AddEntities';
import Added from './app/components/Added';
import Auth from './middlewares/Auth';

const routes = {
  // base component (wrapper for the whole application).
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent: (location, callback) => {
        callback(null, HomePage);
      },
    },
    {
      path: '/admin',
      getComponent: (location, callback) => {
        //if (Auth.isUserAuthenticated()) {
        //  callback(null, DashboardPage);
        //} else {
        callback(null, AdminPanel);
        //}
      },
    },
    { //todo-Ajay : Make a single component for all the three
      path: '/:entitytype',
      getComponent: (location, callback) => {
        //if (Auth.isUserAuthenticated()) {
        //  callback(null, DashboardPage);
        //} else {
        callback(null, AdminEntities);
        //}
      },
    },
    { //todo-Ajay : Make a single component for all the three
      path: '/admin/addentities',
      getComponent: (location, callback) => {
        //if (Auth.isUserAuthenticated()) {
        //  callback(null, DashboardPage);
        //} else {
        callback(null, AddEntities);
        //}
      },
    },
    { //todo-Ajay : Make a single component for both the three
      path: '/admin/addentities/added',
      getComponent: (location, callback) => {
        //if (Auth.isUserAuthenticated()) {
        //  callback(null, DashboardPage);
        //} else {
        callback(null, Added);
        //}
      },
    },
    //{
    //  path: '/course/:course_id',
    //  getComponent: (location, callback) => {
    //    if (Auth.isUserAuthenticated()) {
    //      callback(null, DashboardPage);
    //    } else {
    //      callback(null, CoursePage);
    //    }
    //  }
    //},
    //{
    //  path: '/logout',
    //  onEnter: (nextState, replace) => {
    //    Auth.deauthenticateUser();
    //    replace('/');
    //  }
    //}

  ]
};

export default routes;
