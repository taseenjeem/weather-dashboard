import { useContext, useEffect, useState } from "react";
import favIcon from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../context";
import RedHeartIcon from "../../assets/heart-red.svg";

const AddToFavorite = () => {
  const { addToFavorites, removeFromFavorites, favorites } =
    useContext(FavoriteContext);

  const [isFavorite, toggleFavorite] = useState(false);

  const { weatherData } = useContext(WeatherContext);

  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);

    toggleFavorite(found);
  }, []);

  const handleFavorite = () => {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }
    toggleFavorite(!isFavorite);
  };

  return (
    <>
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button
            onClick={handleFavorite}
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          >
            <span>Add to Favorite</span>
            <img src={isFavorite ? RedHeartIcon : favIcon} alt="heart" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddToFavorite;
