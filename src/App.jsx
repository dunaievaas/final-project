import { React } from "react";
import { HashRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <main className="main">
          <Pages />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </HashRouter>
    </div>
  );
}

export default App;
