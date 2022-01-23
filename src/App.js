import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BuyPage from "./components/BuyPage";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/BuyPage" element={<BuyPage />}></Route>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
