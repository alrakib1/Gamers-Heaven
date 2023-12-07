import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../layout/PrivateRoute";
import Root from "../layout/Root";
import SecretRoute from "../layout/SecretRoute";
import About from "../pages/About/About";
import Details from "../pages/Details/Details";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Vip from "../pages/Vip/Vip";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/game.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("/game.json"),
      },
      {
        path: "/profile",
        element: (
          <SecretRoute>
            <Profile></Profile>
          </SecretRoute>
        ),
      },
      {
        path: "/vip",
        element: (
          <SecretRoute>
            <Vip></Vip>
          </SecretRoute>
        ),
      },
    ],
  },
]);

export default router;
