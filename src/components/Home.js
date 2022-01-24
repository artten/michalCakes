import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Banana_Cake from "../images/Banana_Cake.jpeg";
import Honey_Moon from "../images/Honey_Moon_Cake.jpeg";
import "../App.css";
import CakePic from "./CakePic";
import CakesDB from "../CakesDatabase.json";

const Home = () => {
  return (
    // <div className="gallery">
    //   <ImageGallery items={images} />
    // </div>

    <div className="gallery">
      {CakesDB &&
        CakesDB.map((item) => (
          <div key={item.id} className="galleryPicture">
            <CakePic pic={process.env.PUBLIC_URL + "/" + item.image} />
          </div>
        ))}
    </div>
  );
};

export default Home;
