import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layouts/Root";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
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