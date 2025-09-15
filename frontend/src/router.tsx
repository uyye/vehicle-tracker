import { createBrowserRouter, redirect } from "react-router";
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Vehicles from "./pages/vehicle/vehicles";
import Profile from "./pages/user/Profile";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    loader: () => {
      if (!localStorage.getItem('access_token')) {
        return redirect('/login');
      }
      return null;
    },
    children: [
        { path: '' , element:<Vehicles/>},
        { path: '/vehicle/:id' , element:<Vehicles/>},
        { path: '/profile' , element:<Profile/>},
    ],
  },
  {
    path: '/login',
    element: <Login />,
    loader:()=>{
        if(localStorage.getItem('access_token')){
            return redirect('/')
        }
        return null
    }
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
