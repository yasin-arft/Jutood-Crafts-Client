import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layouts/Root";
import Error from "../pages/error/Error";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import AddCraft from "../pages/addCraft/AddCraft";
import AllArtCraft from "../pages/allArtCraft/AllArtCraft";
import CraftDetails from "../pages/craftDetails/CraftDetails";

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
      },
      {
        path: '/add_craft',
        element: <PrivateRoute><AddCraft /></PrivateRoute>
      },
      {
        path: '/all_art_craft',
        element: <AllArtCraft />,
        loader: () => fetch('http://localhost:5000/crafts')
      },
      {
        path: '/item_details/:id',
        element: <CraftDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`)
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