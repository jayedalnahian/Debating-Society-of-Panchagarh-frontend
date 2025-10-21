import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../components/AboutPageComponents/AboutPage";
import Events from "../components/EventsPageComponents/Events";
import Members from "../components/MembersPageComponents/Members";
import Resources from "../components/ResourcesPageComponents/Resources";
import Contact from "../components/ContactPageComponents/Contact";
import Login from "../components/LoginPageComponents/Login";
import MainLayout from "../layouts/MainLayout";
import Register from './../components/RegisterPageComponents/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>
      },
      {
        path: "/events",
        element: <Events></Events>
      },
      {
        path: "/members",
        element: <Members></Members>
      },
      {
        path: "/resources",
        element: <Resources></Resources>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);

export default router;
