import { Toaster } from "sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

// Pages
import NotFoundPage from "./pages/NotFound";
import Home from "./pages/Home";
import SignIn from "./pages/Auth/signin";
import SignUp from "./pages/Auth/signup";
import DashBoard from "./pages/Analytics/DashBoard";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/analytics", element: <DashBoard /> }, 
  { path: "/auth/signin", element: <SignIn /> },
  { path: "/auth/signup", element: <SignUp /> },
  { path: "*", element: <NotFoundPage /> },
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
