import CakeCard from "./CakeCard";
import CakesDB from "../CakesDatabase.json";

function BuyPage() {
  return (
    <div className="cakes-container">
      {CakesDB &&
        CakesDB.map((item) => {
          if (item.shop === "True") {
            return (
              <div key={item.id} className="card">
                <CakeCard
                  name={item.name}
                  price={item.price}
                  pic={process.env.PUBLIC_URL + "/" + item.image}
                />
              </div>
            );
          }
        })}
    </div>
  );
}

export default BuyPage;
