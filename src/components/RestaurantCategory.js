import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) =>{
    const [showItems,setShowItems] = useState(false);

    // console.log("prps",props);
    const handleClick = () =>{
        const arrow = document.getElementById("arrow");
        if(arrow.textContent=="↑"){
            arrow.textContent = "↓"
        }
        else{
            arrow.textContent = "↑";
        }

        if(showItems){
            setShowItems(false);
        }
        else if(!showItems){
            setShowItems(true);
        }
    }

    return(
        <div>
            <div className="mx-auto font-bold text-2xl font-sans shadow-lg bg-slate-100 text-center w-3/5 h-fit p-5 my-3">
                {/* accordion heading */}
                <div className="cursor-pointer flex align-center justify-between bg-slate-200 w-full h-fit p-5" onClick={handleClick}>
                    <h1>{props.data.title}-({props.data.categories.length})</h1>
                    <span id="arrow">&#8595;</span>
                </div>
                {/* accordion body */}
                {showItems && <ItemList items={props.data.categories[0].itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;