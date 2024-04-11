import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Error from "../ErrorPage/Error";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetails/ProductDetail";
import About from "../About/About";
import Login from "../Login/Login";
import Registration from "./../Registration/Registration";
import PrivateRoute from "./PrivetRout";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import Contact from "../../Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fake-data.json"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetail> </ProductDetail>
          </PrivateRoute>
        ),
        loader: () => fetch(`/fake-data.json`),
      },
      {
        path: "/about",
        element: <About></About>
      },
            {
        path: "/contact",
        element:<Contact></Contact>
      },
      {
        path:'/updateProfile',
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
export default router;
