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
import MyArtCraft from "../pages/myArtCraft/MyArtCraft";
import UpdateCraft from "../pages/updateCraft/UpdateCraft";
import SubcategoryItem from "../pages/subcategoryItem/SubcategoryItem";

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
        loader: () => fetch('https://jutood-crafts-server.vercel.app/crafts')
      },
      {
        path: '/item_details/:id',
        element: <PrivateRoute><CraftDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://jutood-crafts-server.vercel.app/crafts/${params.id}`)
      },
      {
        path: '/my_art_craft',
        element: <PrivateRoute><MyArtCraft /></PrivateRoute>
      },
      {
        path: '/update_craft/:id',
        element: <PrivateRoute><UpdateCraft /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://jutood-crafts-server.vercel.app/crafts/${params.id}`)
      },
      {
        path: '/subcategory_item/:subcategoryName',
        element: <SubcategoryItem />,
        loader: ({ params }) => fetch(`https://jutood-crafts-server.vercel.app/subcategory_crafts/${params.subcategoryName}`)
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