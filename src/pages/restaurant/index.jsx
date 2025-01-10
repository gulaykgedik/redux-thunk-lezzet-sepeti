import Detail from "./Detail";
import Product from "./Product";

const Restaurant = () => {
  return (
    <div>
      <div className="shadow mt-20">
        <div className="container">
          <Detail />
        </div>
      </div>

      <div className="shadow">
        <div className="container">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
