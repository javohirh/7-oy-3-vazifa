import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { MainRootLayout, LoginLayout, SeansLayout } from "./layouts";
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
} from "./pages";

import store from "./redux/store";

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
        {
          path: "usernotfound",
          element: <UserNotFound />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-[1320px] mx-auto">
          <RouterProvider router={routes} />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
