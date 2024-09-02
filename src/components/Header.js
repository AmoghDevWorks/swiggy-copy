import React,{useContext, useState} from "react";
import useOnlineStatus from "../utils/useOnlineStatus"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Heading = () =>{
    const [btnState,setbtnState] = useState("LOGIN");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    return(
        <div className="bg-green-200 w-full h-16 flex justify-between align-center p-2">
            <img className="h-full rounded-md" src="https://tse4.mm.bing.net/th?id=OIP.ueHppfRf52CDn841Rpj8IwHaHa&pid=Api&P=0&h=180" alt="image"></img>
            <div className="w-1/2">
                <ul className="flex align-center justify-evenly mt-2">
                    <li className="p-1">ONLINE:{onlineStatus?"Y":"N"}</li>
                    <li className="p-1"><Link to="/">HOME</Link></li>
                    <li className="p-1"><Link to="/about">ABOUT</Link></li>
                    <li className="p-1"><Link to="/contactus">CONTACT US</Link></li>
                    <li className="p-1"><Link to="/grocery">GROCERY</Link></li>
                    <button className="border-solid border-black border-2 p-1 rounded-md" onClick={()=>{
                        if(btnState==="LOGIN"){
                            setbtnState("LOGOUT");
                        }
                        else{
                            setbtnState("LOGIN")
                        }
                    }}>{btnState}</button>
                    <li className="p-1 font-semibold capitalize">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )        
}

export default Heading; 