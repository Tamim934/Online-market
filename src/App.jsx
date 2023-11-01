import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import SignUp from "./pages/signup/SignUp"
import WishList from "./pages/wishlist/WishList"
import Cart from "./pages/cart/Cart"
import CheckOut from "./pages/checkout/CheckOut"
import NotFound from "./pages/notfound/NotFound"

function App() {

    const isRouter = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Home/>
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
                }
            ]
        },
        {
            path: "*",
            element: <NotFound/>
        }
    ])

    return <RouterProvider router = {isRouter}/>
}

export default App