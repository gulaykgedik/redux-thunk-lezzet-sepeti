import { Link } from "react-router-dom";
import { IoRestaurantSharp } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector((store) => store.cartReducer);
  const { restaurants } = useSelector((store) => store.restaurantReducer);

  const totalAmount = cart.reduce((total, i) => total + i.amount, 0);

  return (
    <header className="shadow relative">
      <div className=" bg-red-500 fixed top-0 left-0 right-0 z-[100] ">
        <div className="container flex items-center justify-between">
          <Link
            to="/"
            className="text-white font-[900] text-2xl font-mono md:text-3xl "
          >
            Lezzet Sepeti
          </Link>

          <div className="flex gap-5">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-gray-200 font-semibold cursor-pointer text-white text-[18px]"
            >
              Yakınınızda {restaurants.length}
              <IoRestaurantSharp className="text-white" />
              <span className="max-md:hidden">Restoran var</span>
            </Link>

            <button className="button">Giriş Yap</button>
            <button className="button">Kayıt Ol</button>

            <Link
              to="/cart"
              className="text-white flex items-center gap-2 py-2 px-3 font-semibold hover:bg-red-100 hover:text-red-500 transition rounded-full"
            >
              <BsBasket className="font-semibold text-xl" />
              <span>{totalAmount}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
