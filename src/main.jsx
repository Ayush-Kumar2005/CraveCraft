import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Restaurants from "./components/Restaurants";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Login from "./components/Login";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SignUp from "./components/Signup";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>,
    children:[  
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
