import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showindex, setShowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const name = resInfo?.cards?.[0]?.card?.card?.text;
  const { cuisines, costForTwo, avgRating } = resInfo?.cards[2].card.card.info;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold my-6 text-lg">{`Ratings - ${avgRating} stars`}</h3>
      <p className="font-bold my-6 text-lg">
        {cuisines.join(", ")} - {"Rs. " + costForTwo / 100}
      </p>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={showindex == index}
            setShowIndex={() =>
              showindex === index ? setShowIndex(null) : setShowIndex(index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
