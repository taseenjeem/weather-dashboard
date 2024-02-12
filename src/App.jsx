import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { FavoriteProvider, WeatherProvider } from "./provider";
import LocationProvider from "./provider/LocationProvider";

const App = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <div className="grid place-items-center min-h-screen">
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </div>
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
};

export default App;
