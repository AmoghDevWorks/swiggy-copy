import { useState,useEffect, useContext } from "react";
import Shimmer from "./Shimmer" 
import { Link } from "react-router-dom";
import { swiggyData } from "../utils/links";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";

const Body = () =>{
    const [AllRestaurants,setAllRestaurants] = useState([]);
    const [listOfRestaurant,setlistOfRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData(); 
    },[])
    
    const fetchData = async() =>{
        const data = await fetch(swiggyData);
        const json = await data.json();

        // console.log(json.data);
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false)
        return(
            <div className="font-bold m-5 font-sans">Looks like you're offline, please check your internet connection</div>
        )
    
    const {setUserName,loggedInUser} = useContext(UserContext);


    if(listOfRestaurant.length===0){
        return <Shimmer />
    }


    return(

        <div>
            <div className="flex justify-around">
                <div>
                    <input className="border-solid border-2 w-96 border-black rounded-md m-2 p-1" type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="ml-2 border-2 border-solid border-black p-1 rounded-md font-medium bg-red-400" onClick={()=>{
                        const filterRestaurant = AllRestaurants.filter((res)=>{return res.info.name.toUpperCase().includes(searchText.toUpperCase())});
                        setlistOfRestaurant(filterRestaurant);
                    }}>
                        Search
                    </button>
                </div>
                <button className="border-solid border-2 border-black rounded-md m-2 p-1" onClick={()=>{
                    setlistOfRestaurant(AllRestaurants);
                }}>All Restaurants</button>
                <button className="border-solid border-2 border-black rounded-md m-2 p-1" onClick={()=>{
                    const filterones = AllRestaurants.filter((rest)=>{
                        return rest.info.avgRating>4.3;
                    })
                    setlistOfRestaurant(filterones);
                }}>Top Rated Restaurants</button>
                <div>
                    <label>UserName:</label>
                    <input type="text" className="m-2 border-solid border-2 rounded-md border-black p-1 w-56" value={loggedInUser} onChange={(e)=>{
                        setUserName(e.target.value)
                    }}/>
                </div>
            </div>
            <div className="w-full h-full flex flex-wrap">
                {
                    listOfRestaurant.map(restaurant=>(
                        // <RestaurantCard resdata={restaurant} key={restaurant.info.id} />
                        <Link data-testid="resCard" className="bg-slate-50 text-center m-1 p-1.5 h-auto w-56 hover:border-solid hover:border-2 hover:border-black" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                            {/* <RestaurantCard resdata={restaurant} /> */}
                            {
                                restaurant.info.avgRating >= 4.6 
                                ? <RestaurantCardPromoted resdata={restaurant} /> 
                                : <RestaurantCard resdata={restaurant} />
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;

