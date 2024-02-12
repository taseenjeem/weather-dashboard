import { useContext } from "react";
import cloudIcon from "../../assets/cloud.svg";
import pinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import formattedDate from "../../utils/date-utils";

const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);

  console.log(weatherData);

  return (
    <>
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img src={cloudIcon} alt="cloud" />
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
