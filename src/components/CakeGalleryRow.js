import img from "../images/Banana_Cake.jpeg"
import CakeCard from './CakeCard';



const CakeGalleryRow = () => {
  return(
    <div className="container mt-5">
      <div className="row align-items-center">
          <div className="col-4 mx-auto">
          <CakeCard name= "banana" image= {img}/>
          </div>
          <div className="col-4 mx-auto">
          <CakeCard name= "banana" image= {img}/>
          </div>
          <div className="col-4 mx-auto">
          <CakeCard name= "banana" image= {img}/>
          </div>
        </div>
        
    </div>
  )
}

export default CakeGalleryRow