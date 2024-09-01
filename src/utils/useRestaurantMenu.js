import { useEffect,useState } from "react";
import { RESMENU_URL } from "../utils/links";

const useRestaurantMenu = (resId) =>{
    const [resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    
    const fetchData = async() =>{
        const data = await fetch(RESMENU_URL+resId);
        const json = await data.json();
        setresInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu;