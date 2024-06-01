import { CDN_URL } from "../utils/constants";

const color = {
  color: "rgba(2, 6, 12, 0.75)",
};
const padding = { paddingLeft: "10px" };

const RestaurantCard = (props = null) => {
  const { resData } = props;
  const { name, avgRating, sla, cuisines } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 style={{ ...color, ...padding }}>{name}</h3>
      <h4 style={{ color: "#989898", fontSize: "12px", ...padding }}>
        {cuisines.join(", ")}
      </h4>
      <h4 style={{ ...color, ...padding }}>{avgRating} star</h4>
      <h4 style={{ ...color, ...padding }}>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
