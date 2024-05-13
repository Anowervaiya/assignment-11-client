import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomeMain from "../Pages/Home/HomeMain/HomeMain";
import Registration from "../Pages/Registration/Registration";
import Details from "../Pages/Details/Details";
import CreateAssingmentMain from "../Pages/CreateAssignMain/CreateAssingmentMain";
import LogIn from "../Pages/LogIn/LogIn";
import AllAssignment from "../Pages/AllAssignment/AllAssignment";
import TakeAssignment from "../Pages/TakeAssignment/TakeAssignment";
import Update from "../Pages/Update/Update";
import Pending from "../Pages/Pending/Pending";
import Attempt from "../Pages/Attempt/Attempt";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <HomeMain></HomeMain>,
      },
      {
        path: '/Registration',
        element: <Registration></Registration>,
      },
      {
        path: '/LogIn',
        element: <LogIn></LogIn>,
      },
      {
        path: '/Details/:id',
        element: <Details></Details>,
      },
      {
        path: '/CreateAssignment',
        element: <CreateAssingmentMain></CreateAssingmentMain>,
      },
      {
        path: '/AllAssignment',
        element: <AllAssignment></AllAssignment>,
      },
      {
        path: '/TakeAssignment/:id',
        element: <TakeAssignment></TakeAssignment>,
      
      },
      {
        path: '/Update/:id',
        element: <Update></Update>,
      },
      {
        path: '/pending',
        element:<Pending></Pending>
      },
      {
        path: '/attempt',
        element:<Attempt></Attempt>
      }
    ],
  },
]);
export default router;