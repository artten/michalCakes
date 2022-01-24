import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
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
