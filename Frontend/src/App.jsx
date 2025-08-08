import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { Toaster } from "sonner";

import NotFoundPage from "./pages/NotFound";
import Home from "./pages/Home";


// Router Config
const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  { path: "*", element: <NotFoundPage/> },
]);

function App() {

  return (
    <>
      <Toaster richColors position="top-right" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
