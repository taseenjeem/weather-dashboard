import { useContext } from "react";
import pinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import formattedDate from "../../utils/date-utils";
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";

const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);

  const getWeatherIcon = () => {
    switch (weatherData?.climate) {
      case "Rain":
        return RainIcon;
      case "Clouds":
        return CloudIcon;
      case "Haze":
        return HazeIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunderIcon;
      case "Sunny":
        return SunnyIcon;

      default:
        return SunnyIcon;
    }
  };

  return (
    <>
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img src={getWeatherIcon(weatherData?.climate)} alt="cloud" />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
              {weatherData?.temperature}°
            </h1>
            <div className="flex items-center space-x-4 md:mb-4">
              <img src={pinIcon} />
              <h2 className="text-2xl lg:text-[50px]">
                {weatherData?.location}
              </h2>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-lg">
          {formattedDate(weatherData?.time, "time", false)} -
          {formattedDate(weatherData?.time, "date", false)}
        </p>
      </div>
    </>
  );
};

export default WeatherHeadline;
