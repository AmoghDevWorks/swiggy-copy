import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom"
  
const RestaurantMenu = () =>{

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    // console.log("fetched successfully");

    if(resInfo === null){
        return <Shimmer />
    }

    console.log(resInfo);
    const values = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const {name,area,completeAddress} = values[values.length-1]?.card?.card;
    const items = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    // console.log(items);

    if(items===undefined){
        return(
            <div className="m-4 font-extrabold font-sans">Unable to fetch</div>
        )
    }

    return(
        <div className="m-5">
            <h1 className="font-bold underline">{name},{area}</h1>
            <h5 className="font-semibold">{completeAddress}</h5>
            <br></br>
            <h2 className="underline font-semibold">Menu</h2>
            <ul className="ml-5 mt-4">
                {
                    items.map(item=>
                        <li className="" key={item.id}>{item.card.info.name}--Rs.{item.card.info.price/100}</li>
                        // console.log(item)
                    )
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;