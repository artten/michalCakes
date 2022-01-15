import './App.css';
import Header from './components/Header';
import CakeCard from './components/CakeCard';
import CakesDB from "./CakesDatabase.json"
import banana from "./images/Banana_Cake.jpeg"


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <div id="space"></div> */}
      {/* <CakeGallery/> */}
      <div className='space'>

      </div>
      <div className='cakes-container'>
        {
            CakesDB && CakesDB.map((item) => (
              <div key={item.id} className='card'>
               <CakeCard name = {item.name} price = {item.price} pic={process.env.PUBLIC_URL + "/" + item.image}/>
                </div>
              ))
        }
      </div>
    </div>
  );
}

export default App;
