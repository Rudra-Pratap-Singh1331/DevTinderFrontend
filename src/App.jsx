import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import SignUp from "./components/authComponent/SignUp";
import Login from "./components/authComponent/Login";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Body />,
      children: [],
    },
  ]);
  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
};

export default App;
