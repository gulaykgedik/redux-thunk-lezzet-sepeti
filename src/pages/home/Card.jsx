import { FaClock, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ restaurant }) => {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="relative shadow rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-lg cursor-pointer transition w-fit"
    >
      <span className="bg-red-500 p-1 px-3 text-sm absolute end-1 top-2 rounded-md text-white ">
        {restaurant.distance} km uzakta
      </span>

      <img
        src={restaurant.photo}
        className="object-cover w-[450px] h-[250px] 
      "
      />

      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl md:text-lg font-semibold">
            {restaurant.name}
          </h3>

          <p className="flex items-center gap-2 text-red-500 font-semibold">
            <FaStar />
            {restaurant.rating}
          </p>
        </div>

        <p className="text-sm my-3 text-gray-500">
          {" "}
          {restaurant.minPrice} TL Minimum
        </p>

        <div className="flex gap-4 justify-between items-center">
          <p className="flex gap-2 items-center font-semibold">
            <FaClock className="text-red-500" />
            <span className="text-gray-600">
              {restaurant.estimatedDelivery} dak.
            </span>
          </p>

          {restaurant.isDeliveryFree && (
            <p className="flex gap-2 items-center font-semibold">
              <MdDeliveryDining className="text-red-500" />
              <span>Ücretsiz </span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
