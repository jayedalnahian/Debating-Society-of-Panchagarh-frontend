import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home/HomePage";

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
    ],
  },
]);

export default router;
