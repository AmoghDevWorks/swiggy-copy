import {useState,useEffect} from "react"

const useOnlineStatus = () =>{
    const [onlineStatus,setonlineStatus] = useState(true);

    //check if online
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlineStatus(false);
        })

        window.addEventListener("online",()=>{
            setonlineStatus(true);
        })
    },[])

    //returning boolean value
    return onlineStatus;
}
export default useOnlineStatus;