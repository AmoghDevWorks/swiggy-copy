import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom"
import RestaurantCategory from "./RestaurantCategory";
  
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
    const items = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(items)
    const categories = items.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    // console.log("cato",categories); 

    if(items===undefined){
        return(
            <div className="m-4 font-extrabold font-sans">Unable to fetch</div>
        )
    }

    return(
        <div className="m-5 text-center">
            <h1 className="font-bold underline my-5 text-2xl">{name},{area}</h1>
            <h5 className="font-semibold text-lg">{completeAddress}</h5>
            <br></br>
            {/* {here we are building accordion} */}
            {categories.map((category) => (<RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>))}
        </div>
    )
}

export default RestaurantMenu;