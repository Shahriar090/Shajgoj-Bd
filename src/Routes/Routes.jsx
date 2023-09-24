import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "./Login/Login";
import EmailPasswordsLogin from "./Login/EmailPasswordsLogin";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/emailPasswordLogin',
        element: <EmailPasswordsLogin></EmailPasswordsLogin>
      }
    ]
  },
]);

export default router;