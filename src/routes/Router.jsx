
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Details from "../pages/Details";
import PrivateRoute from "../layout/PrivateRoute";
import Profile from "../pages/Profile";
import SecretRoute from "../layout/SecretRoute";
import About from "../pages/About";
  
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement : <ErrorPage></ErrorPage> ,
      element: <Root></Root>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : ()=> fetch('/game.json')
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
            path : '/about',
            element : <About></About>
        },
        {
          path: '/details/:id',
          element : <PrivateRoute><Details></Details></PrivateRoute>,
          loader : ()=> fetch('/game.json')
        },
        {
          path: '/profile',
          element : <SecretRoute><Profile></Profile></SecretRoute>
        }
      ]
    },
  ]);

  export default router;