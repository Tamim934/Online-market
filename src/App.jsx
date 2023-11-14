<<<<<<< HEAD
import React, { useEffect } from "react"
import { createBrowserRouter, Navigate, Route, Router, RouterProvider, Routes, useNavigate } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import SignUp from "./pages/signup/SignUp"
import WishList from "./pages/wishlist/WishList"
import Cart from "./pages/cart/Cart"
import CheckOut from "./pages/checkout/CheckOut"
import Account from "./pages/account/Account"
import NotFound from "./pages/notfound/NotFound"
import Catagorepage from "./pages/Catagorie/Catagorepage"
=======
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
>>>>>>> 5acc7f17bce63067daf2890e62511e057e743df3


  
function App() {
<<<<<<< HEAD
   
    const isRouter = createBrowserRouter([
         {
           
            index: true,
            element: <SignUp/>,
          },
          {
            path: "/",
            element: <Layout />,
            children: [
           
            {
                path:"home",
                element:<Home/>
            },
                {
                    path: "contact",
                    element: <Contact/>
                },
                {
                    path: "about",
                    element: <About/>
                },
                {
                    path: "signup",
                    element: <SignUp/>
                },
                {
                    path: "wishlist",
                    element: <WishList/>
                },
                {
                    path: "cart",
                    element: <Cart/>,
                },
                {
                    path: "checkout",
                    element: <CheckOut/>
                },
                {
                    path: "account",
                    element: <Account/>
                },
                {
                    path: "catagorepage",
                    element: <Catagorepage/>
                }
            ]
        },
        {
            path: "*",
            element: <NotFound/>
        }
    ])
=======
  const isRouter = createBrowserRouter([
    {
      path: "/",
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
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <CheckOut />,
            </ProtectedRoute>
          ),
        },
        {
          path: "account",
          element: <Account />,
        },
      ],
    },
    {
      path: "/signup",
      element: (
        <AuthCheck>
          <SignUp />
        </AuthCheck>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
>>>>>>> 5acc7f17bce63067daf2890e62511e057e743df3

    return <RouterProvider router = {isRouter}/>
}

export default App
