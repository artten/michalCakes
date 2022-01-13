import CakeGalleryRow from './CakeGalleryRow';
import CakeCard from './CakeCard';



const CakeGallery = () => {
  return(
    <>
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
    </>
  )
}

export default CakeGallery