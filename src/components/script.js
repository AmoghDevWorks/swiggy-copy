import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Header";
import Body from "./body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"
import About from "./About";
import ContactUs from "./ContactUs";
import Grocery from "./Grocery";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";

const Structure = () =>{
    return(
        <div>
            <Heading />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Structure />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contactus",
                element:<ContactUs />
            },
            {
                path:"/grocery",
                element:<Grocery />
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            }
        ],
        errorElement:<Error />
    }
])


const box = ReactDOM.createRoot(document.getElementById("box"))

box.render(<RouterProvider router={appRouter} />);