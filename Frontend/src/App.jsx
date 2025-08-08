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

//import './index.css';
import './index.css';

import NotFoundPage from "./pages/NotFound";
import SignIn from "./pages/Auth/signin";
import SignUp from "./pages/Auth/signup";


// Router Config
const router = createBrowserRouter([
  { path: "*", element: <NotFoundPage/> },
  { path: "/auth/signin", element: <SignIn /> },
  { path: "/auth/signup", element: <SignUp /> },
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


