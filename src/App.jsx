import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRootLayout from "./layouts/MainRootLayout";
import LoginLayout from "./layouts/LoginLayout";
import Login from "./pages/Login";
import UserNotFound from "./pages/UserNotFound";
import Check from "./pages/Check";
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
    <div className="">
      <RouterProvider router={routes} />
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
