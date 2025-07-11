import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    return(
        <div>
                {items.map((item)=>(
                    <div key={item.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="font-bold">{item.card.info.name}</span>
                                <span> ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                                <div className="absolute">
                                    <button className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg">Add +</button>
                                </div>
                                <img alt ="image" src={CDN_URL + item.card.info.imageId} className="w-full h-32 object-cover" />
                        </div>
                    </div>
                   

                ))}
            
        </div>
    )
}

export default ItemList;