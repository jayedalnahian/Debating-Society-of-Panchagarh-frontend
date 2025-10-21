import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../components/AboutPageComponents/AboutPage";

import MainLayout from "../layouts/MainLayout";

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
      }
    ],
  },
]);

export default router;
