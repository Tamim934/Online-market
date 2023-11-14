import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import SignUp from "./pages/signup/SignUp";
import WishList from "./pages/wishlist/WishList";
import Cart from "./pages/cart/Cart";
import CheckOut from "./pages/checkout/CheckOut";
import Account from "./pages/account/Account";
import NotFound from "./pages/notfound/NotFound";
import AuthCheck from "./utils2/AuthCheck";
import ProtectedRoute from "./utils2/ProtectedRoute";

function App() {
  const isRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        // <AuthCheck>
        <SignUp />
        // </AuthCheck>
      ),
    },
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "wishlist",

          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout",
          element: <CheckOut />,
        },
        {
          path: "account",
          element: <Account />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={isRouter} />;
}

export default App;
