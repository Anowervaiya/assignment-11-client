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
import GiveMarks from "../Pages/Give_Marks/GiveMarks";
import PrivateRout from "../PrivateRout/PrivateRout";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import DailyRoutin from "../Pages/CreateRoutin/DailyRoutin";
import MyRoutin from "../Pages/MyRoutin/MyRoutin";



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
        path: 'Registration',
        element: <Registration></Registration>,
      },
      {
        path: 'LogIn',
        element: <LogIn></LogIn>,
      },
      {
        path: 'Details/:id',
        element: (
          <PrivateRout>
            <Details></Details>
          </PrivateRout>
        ),
      },
      {
        path: 'CreateAssignment',
        element: (
          <PrivateRout>
            {' '}
            <CreateAssingmentMain></CreateAssingmentMain>
          </PrivateRout>
        ),
      },
      {
        path: 'AllAssignment',
        element: <AllAssignment></AllAssignment>,
      },
      {
        path: 'TakeAssignment/:id',
        element: (
          <PrivateRout>
            <TakeAssignment></TakeAssignment>
          </PrivateRout>
        ),
      },
      {
        path: 'Update/:id',
        element: (
          <PrivateRout>
            <Update></Update>
          </PrivateRout>
        ),
      },
      {
        path: 'pending',
        element: (
          <PrivateRout>
            {' '}
            <Pending></Pending>
          </PrivateRout>
        ),
      },
      {
        path: 'attempt',
        element: (
          <PrivateRout>
            <Attempt></Attempt>
          </PrivateRout>
        ),
      },
      {
        path: 'GiveMarks/:id',
        element: (
          <PrivateRout>
            <GiveMarks></GiveMarks>
          </PrivateRout>
        ),
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>,
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>,
      },
      {
        path: 'dailyRoutin',
        element: (
          <PrivateRout>
            <DailyRoutin></DailyRoutin>
          </PrivateRout>
        ),
      },
      {
        path: 'myRoutin',
        element: (
          <PrivateRout>
            <MyRoutin></MyRoutin>,
          </PrivateRout>
        ),
      },
    ],
  },
]);
export default router;