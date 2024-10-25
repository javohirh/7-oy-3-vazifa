import { createBrowserRouter } from "react-router-dom";
import { MainRootLayout, LoginLayout, SeansLayout } from "../layouts";
import {
  Login,
  Check,
  Movie,
  Seans,
  UserNotFound,
  Main,
  BiletPage,
  Profile,
  Search,
} from "../pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainRootLayout />,

    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "seance",
        element: <SeansLayout />,
        children: [
          {
            index: true,
            element: <Seans />,
          },
          {
            path: ":id",
            element: <Movie />,
          },
        ],
      },
      {
        path: "bilet",
        element: <BiletPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },

  {
    path: "login",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "check",
        element: <Check />,
      },
    ],
  },
]);
export default routes;
