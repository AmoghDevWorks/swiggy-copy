import {RESCARD_URL} from "../utils/links";

const RestaurantCard = (props) =>{
    const {resdata} = props;
    
    return(
        <div className="h-full flex align-center justify-between flex-col">
            <img className="h-1/3 w-full" src={RESCARD_URL+resdata.info.cloudinaryImageId}></img>
            <h1 className="font-bold">{resdata.info.name}</h1>
            <h2 className="font-semibold">{resdata.info.cuisines.join(", ")}</h2>
            <h4>{resdata.info.avgRating} Rating</h4>
            <h6>{resdata.info.costForTwo}</h6>
        </div>
    )
}

export default RestaurantCard;