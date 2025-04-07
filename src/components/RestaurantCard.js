import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restroData } = props;
    const { name, cuisines, avgRating, sla} = restroData?.info;
    return (
        <div className="restro-card">
            <img
                className="restro-img"
                alt="my logo"
                src={CDN_URL+restroData.info.cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString} minutes</h4>
        </div>
    );
};

export default RestaurantCard;