import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../Layout/Client/ClientLayout";

import { Home } from "../Pages/Home/Home";
import { Contact } from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    errorElement: null,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
