import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Header";
import Body from "./body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"
import About from "./About";
import ContactUs from "./ContactUs";
import Grocery from "./Grocery";
import Error from "./Error";
import Cart from "./Cart";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
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
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
                <div>
                    <Heading />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
        
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
                path:"/cart",
                element:<Cart />
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