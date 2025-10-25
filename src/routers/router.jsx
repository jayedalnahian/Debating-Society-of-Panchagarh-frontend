import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../components/AboutPageComponents/AboutPage";
import Events from "../components/EventsPageComponents/Events";
import Members from "../components/MembersPageComponents/Members";
import Resources from "../components/ResourcesPageComponents/Resources";
import Contact from "../components/ContactPageComponents/Contact";
import Login from "../components/LoginPageComponents/Login";
import MainLayout from "../layouts/MainLayout";
import Register from "./../components/RegisterPageComponents/Register";
import DashboardLayout from "../AdminDashboard/DashboardLayout/DashboardLayout";
import DashBoardHome from "../AdminDashboard/DashboardPages/HomePage/DashBoardHome";
import Overview from "../AdminDashboard/DashboardPages/OverView/Overview";
import AdminEvents from "../AdminDashboard/DashboardPages/Events/AdminEvents";
import AdminMembers from "../AdminDashboard/DashboardPages/Members/AdminMembers";
import Announcements from "../AdminDashboard/DashboardPages/Announcements/Announcements";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/members",
        element: <Members></Members>,
      },
      {
        path: "/resources",
        element: <Resources></Resources>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      
      {
        index: true,
        element: <Overview></Overview>
      },
      {
        path: "/dashboard/events",
        element: <AdminEvents></AdminEvents>
      },
      {
        path: "/dashboard/members",
        element: <AdminMembers></AdminMembers>
      },
      {
        path: "/dashboard/announcements",
        element: <Announcements></Announcements>
      },
    ],
  },
]);

export default router;
