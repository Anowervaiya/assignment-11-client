import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomeMain from "../Pages/Home/HomeMain/HomeMain";
import Registration from "../Pages/Registration/Registration";
import Details from "../Pages/Details/Details";
import CreateAssingmentMain from "../Pages/CreateAssignMain/CreateAssingmentMain";
import LogIn from "../Pages/LogIn/LogIn";
import AllAssignment from "../Pages/AllAssignment/AllAssignment";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<HomeMain></HomeMain>
      },
      {
        path: '/Registration',
        element:<Registration></Registration>
      },
      {
        path: '/LogIn',
        element:<LogIn></LogIn>
      },
      {
        path: '/Details',
        element: <Details></Details>,
       
      },
      {
        path: '/CreateAssignment',
        element:<CreateAssingmentMain></CreateAssingmentMain>
      },
      {
        path: '/AllAssignment',
        element:<AllAssignment></AllAssignment>
     }
    ]
  },
]);
export default router;