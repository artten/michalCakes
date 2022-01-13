import './App.css';
import Header from './components/Header';
import CakeGallery from './components/CakeGallery';
import CakeCard from './components/CakeCard';
import Banana_Cake from "./images/Banana_Cake.jpeg"
import O_Letter_Cake from "./images/O_Leter_Cake.jpeg"
import E_Letter_Cake from "./images/E_Leter_Cake.jpeg"
import A_Letter_Cake from "./images/A_Leter_Cake.jpeg"
import Honey_Moon from "./images/Honey_Moon_Cake.jpeg"
import Shmarim_Cake1 from "./images/Shmarim_Cake.jpeg"
import Shmarim_Cake2 from "./images/Shmarim_Cake(2).jpeg"
import Strawberry_Cake from "./images/Strawberry_Cake.jpeg"


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <div id="space"></div> */}
      {/* <CakeGallery/> */}
      <div className='space'>

      </div>
      <div className='cakes-container'>
        <div className='card'><CakeCard name = "Banana Cake" price = "15" pic={Banana_Cake}/></div>
        <div className='card'><CakeCard name = "O Letter Cake" price = "7.5" pic={O_Letter_Cake}/></div>
        <div className='card'><CakeCard name = "A Letter Cake" price = "8.5" pic={A_Letter_Cake}/></div>
        <div className='card'><CakeCard name = "E Letter Cake" price = "22" pic={E_Letter_Cake}/></div>
        <div className='card'><CakeCard name = "Smarim Cake" price = "20" pic={Shmarim_Cake1}/></div>
        <div className='card'><CakeCard name = "Smarim Cake" price = "40" pic={Shmarim_Cake2}/></div>
        <div className='card'><CakeCard name = "Strawberry Cake" price = "5" pic={Strawberry_Cake}/></div>
        <div className='card'><CakeCard name = "Honey Moon" price = "10" pic={Honey_Moon}/></div>
      </div>
    </div>
  );
}

export default App;
