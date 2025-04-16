import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restroData } = props;
  const { name, cuisines, avgRating, sla } = restroData?.info;

  return (
    <div data-testid="resCard"className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
      <img
        className="rounded-lg w-full h-36 object-cover"
        alt="restaurant"
        src={CDN_URL + restroData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg truncate">{name}</h3>
      <h4 className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</h4>
      <h4 className="text-sm">{avgRating} ⭐</h4>
      <h4 className="text-sm">{sla.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-lg z-10 shadow-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
