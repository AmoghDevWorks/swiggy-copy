import { IMAGE_URL } from "../utils/links";

const ItemList = ({items}) =>{
    // console.log("items",items);
    return(
        <div>
            {
                items.map((item) =>(
                    <div className="border-b-2 border-b-slate-500 h-fit w-full flex align-center justify-between p-2 hover:border-solid hover:border-2 hover:border-black hover:rounded-md" key={item?.card?.info?.id}>
                        <div className="w-1/2 flex flex-col align-center justify-around p-2 font-medium text-base">
                            <h1>{item?.card?.info?.name}</h1>
                            <p>Rating:{item?.card?.info?.ratings?.aggregatedRating?.rating}</p>
                            <p>Price:Rs.{(item?.card?.info?.price||item?.card?.info?.defaultPrice)/100}</p>
                        </div>
                        <div className="relative flex flex-col align-center justify-between">
                            <img className="h-full rounded-md w-1/2 object-fill" src={IMAGE_URL+item?.card?.info?.imageId}></img>
                            <button className="bottom-0 left-1/4 absolute h-fit w-fit p-0.5 rounded-md bg-green-400 text-white font-semibold font-sans">Add+</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;