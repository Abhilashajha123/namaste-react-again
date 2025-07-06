import { CDN_URL } from "../utils/constants";

const color = {
  color: "rgba(2, 6, 12, 0.75)",
};
const padding = { paddingLeft: "10px" };

const RestaurantCard = (props = null) => {
  const { resData } = props;
  const { name, avgRating, sla, cuisines } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200">
      <img
        className="rounded-lg mb-3"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 style={{ color: "#989898", fontSize: "12px", ...padding }}>
        {cuisines.join(", ")}
      </h4>
      <h4 style={{ ...color, ...padding }}>{avgRating} star</h4>
      <h4 style={{ ...color, ...padding }}>{sla.slaString}</h4>
    </div>
  );
};

export const ResturantCardHighRating = (RestaurantCard)=>{
  return (props) =>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">High Rating </label>
        <RestaurantCard {...props}/>
      </div>
    )
  };
};


//Higher Order componenet
//input- restaurantcard => ResturantCardHighRating

export default RestaurantCard;
