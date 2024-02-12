import { useContext } from "react";
import { FavoriteContext } from "../../context";

const FavoriteListModal = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <>
      <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
        <h3 className="text-lg font-bold px-4">Favorite Locations</h3>
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          {favorites.length > 0 ? (
            favorites?.map((item) => (
              <li key={item.location} className="hover:bg-gray-200">
                {item.location}
              </li>
            ))
          ) : (
            <p>Nothing is added to Favourites!</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default FavoriteListModal;
