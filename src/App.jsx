import { React } from "react";
import { BrowserRouter } from "react-router-dom";
import Catecory from "./components/category/Catecory";
import Pages from "./pages/Pages";
import HeroSlider from "./components/hero-slider/HeroSlider";
import MealPlan from "./components/meal-plan/MealPlan";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main">
          <HeroSlider />
          <Catecory />
          <Pages />
          <MealPlan />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
