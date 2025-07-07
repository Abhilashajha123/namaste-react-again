
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex })=>{

const itemslist = data.itemCards; 

 const handleClick = () => {
    console.log("hghggh");
    setShowIndex();  // ✅ calling function passed from parent

  };

    return<div>
        
        {/* header */}

        <div className="bg-gray-50 shadow-lg p-4 mx-auto my-4 w-6/12">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>

            {showItems && <ItemList items={itemslist}/>}
        </div>
        {/* accordian body */}
    </div>
}

export default RestaurantCategory;