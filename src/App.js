import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import BuyPage from "./components/BuyPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/MichalCakes" element={<Home />} />
            <Route path="/BuyPage" element={<BuyPage />}></Route>
          </Routes>
        </div>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
