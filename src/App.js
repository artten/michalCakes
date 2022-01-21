import './App.css';
import Header from './components/Header';
import CakeCard from './components/CakeCard';
import CakesDB from "./CakesDatabase.json"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from "./components/Home"
import BuyPage from "./components/BuyPage"

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <div id="space"></div> */}
      {/* <CakeGallery/> */}
      {/* <div className='space'>

      </div> */}
      <Router>
      <div>
        <Routes>
          {/* <Route exact path="/">
          <div className='cakes-container'>
            {
              CakesDB && CakesDB.map((item) => (
                <div key={item.id} className='card'>
                <CakeCard name = {item.name} price = {item.price} pic={process.env.PUBLIC_URL + "/" + item.image}/>
                  </div>
                ))
            }
         </div>  
          </Route> */}
          <Route exact path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/BuyPage" element={<BuyPage/>} >
          </Route>
        </Routes>
      </div>
    </Router>

{/* <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="about" component={<About/>} />
    </Routes>
  </Router> */}

    </div>
  );
}

export default App;
