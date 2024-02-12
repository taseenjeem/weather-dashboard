import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { FavoriteProvider, WeatherProvider } from "./provider";

const App = () => {
  return (
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
  );
};

export default App;
