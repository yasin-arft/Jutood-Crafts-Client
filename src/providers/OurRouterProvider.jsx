import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layouts/Root";
import Error from "../pages/error/Error";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
]);

const OurRouterProvider = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default OurRouterProvider;