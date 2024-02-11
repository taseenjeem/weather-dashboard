import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

const App = () => {
  return (
    <>
      <div className="grid place-items-center min-h-screen">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
