import ItemList from "./ItemList";

const RestaurantCategory = (props) =>{

    // console.log("prps",props);
    const handleClick = () =>{
        props.setshowIndex();
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
                {props?.showItems && <ItemList items={props.data.categories[0].itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;