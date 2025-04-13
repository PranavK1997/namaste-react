import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-start p-4 border-b border-gray-200"
        >
          <div className="w-8/12 text-left pr-4">
            <h3 className="font-semibold text-base text-gray-800 mb-1">
              {item.card.info.name}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              ₹
              {item.card.info.defaultPrice / 100 ||
                item.card.info.finalPrice / 100 ||
                item.card.info.price / 100}
            </p>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 relative flex justify-center items-center">
            <img
              className="w-full h-[100px] object-cover rounded-xl shadow-sm"
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <button className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-white text-green-500 font-semibold px-4 py-1 text-sm rounded-md shadow-md hover:bg-green-50 transition">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
