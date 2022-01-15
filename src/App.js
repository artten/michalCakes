import './App.css';
import Header from './components/Header';
import CakeCard from './components/CakeCard';
// import Banana_Cake from "./images/Banana_Cake.jpeg"
// import O_Letter_Cake from "./images/O_Letter_Cake.jpeg"
// import E_Letter_Cake from "./images/E_Letter_Cake.jpeg"
// import A_Letter_Cake from "./images/A_Letter_Cake.jpeg"
// import Honey_Moon from "./images/Honey_Moon_Cake.jpeg"
// import Shmarim_Cake1 from "./images/Shmarim_Cake.jpeg"
// import Shmarim_Cake2 from "./images/Shmarim_Cake(2).jpeg"
// import Strawberry_Cake from "./images/Strawberry_Cake.jpeg"
import CakesDB from "./CakesDatabase.json"


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
               <CakeCard name = {item.name} price = {item.price} pic={item.image}/>
                </div>
              ))
        }
      </div>
    </div>
  );
}

export default App;
