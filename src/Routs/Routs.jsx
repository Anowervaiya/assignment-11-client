import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomeMain from "../Pages/Home/HomeMain/HomeMain";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<HomeMain></HomeMain>
      }
    ]
  },
]);
export default router;