import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Login from "../components/login/Login";
import LoginForm from "../components/login/LoginForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "login/*",
        element: <Login />,
        children: [
            { index: true, element: <LoginForm /> }
        ],
      },
    ],
  },
]);
