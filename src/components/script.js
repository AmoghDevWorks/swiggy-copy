import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Header";
import Body from "./body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"
import About from "./About";
import ContactUs from "./ContactUs";
import Grocery from "./Grocery";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import UserContext from "../utils/UserContext";

const Structure = () =>{
    const [userName,setUserName] = useState("default user");

    useEffect(()=>{
        //consider a API call
        const data = {
            name:"Amogh Kashyap",
        }
        setUserName(data.name);
    },[])

    return(
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
            <div>
                <Heading />
                <Outlet />
            </div>
        </UserContext.Provider>
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