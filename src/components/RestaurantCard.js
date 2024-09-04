import {RESCARD_URL} from "../utils/links";

const RestaurantCard = (props) =>{
    const {resdata} = props;
    // console.log(resdata);
    
    return(
        <div className="h-full flex align-center justify-between flex-col gap-3">
            <img className="max-h-32 w-full object-cover" src={RESCARD_URL+resdata.info.cloudinaryImageId}></img>
            <h1 className="font-bold">{resdata.info.name}</h1>
            <h2 className="font-semibold">{resdata.info.cuisines.join(", ")}</h2>
            <h4>{resdata.info.avgRating} Rating</h4>
            <h6>{resdata.info.costForTwo}</h6>
        </div>
    )
}

//Higher Order Component
// input is RestaurantCard output is RestaurantCardpromoted

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) =>{
        return(
            <div>
                <label className="left-2 absolute bg-black p-1 rounded-md text-white font-bold">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;