import App from './app/app';
import HomePage from './app/components/HomePage';
//import LoginPage from './app/components/LoginPage';
import AdminPanel from './app/components/AdminPanel';
import Entities from './app/components/Entities';
import Auth from './middlewares/Auth';
//import CoursePage from './app/components/CoursePage';
//import CourseSearchPage from './app/components/CourseSearchPage';

const routes = {
  // base component (wrapper for the whole application).
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent: (location, callback) => {
        callback(null, HomePage);
      }
    },
    {
      path: '/admin',
      getComponent: (location, callback) => {
        //if (Auth.isUserAuthenticated()) {
        //  callback(null, DashboardPage);
        //} else {
        callback(null, AdminPanel);
        //}
      }
    },
    { //todo-Ajay : Make a single component for both the three
      path: '/admin/entities/:entitytype',
      getComponent: (location, callback) => {
        //if (Auth.isUserAuthenticated()) {
        //  callback(null, DashboardPage);
        //} else {
        callback(null, Entities);
        //}
      }
    }
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
