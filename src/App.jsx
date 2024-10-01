import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRootLayout from "./layouts/MainRootLayout";
import LoginLayout from "./layouts/LoginLayout";
import Login from "./pages/Login";
import UserNotFound from "./pages/UserNotFound";
import Check from "./pages/Check";
import SeansLayout from "./layouts/SeansLayout";
import Movie from "./pages/Movie";
import Seans from "./pages/Seans";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
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
          path: "Сеансы",
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
        {
          path: "usernotfound",
          element: <UserNotFound />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-[1320px] mx-auto">
        <RouterProvider router={routes} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
