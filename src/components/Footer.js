import instagram from "../images/icons8-instagram-48.png";
import phone from "../images/icons8-phone-48.png";
import gmail from "../images/icons8-gmail-64.png";
import "../App.css";

function Footer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f1f1f1"
        }}
      >
        <h1> Contact me </h1>
      </div>

      <div className="flex-container">
        <div className="flex-phone">
          <img src={phone}></img> 05247111111
        </div>
        <div className="flex-instagram">
          <img src={instagram}></img>
          Michal_et1997
        </div>
        <div className="flex-gmail">
          <img src={gmail} style={{ height: "40px" }}></img>{" "}
          michalet1997@gmail.com
        </div>
      </div>
    </>
  );
}

export default Footer;
