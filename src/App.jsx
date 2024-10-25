import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";

import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import routes from "./routes/routes";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-[1320px] mx-auto">
          <ToastContainer />
          <RouterProvider router={routes} />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
