import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-10 font-semibold text-xl">
      Sepette henüz herhangi bir ürün bulunmuyor.
      <Link
        to={"/"}
        className="border p-2 shadow rounded hover:bg-gray-100 mt-5"
      >
        Restoranlara Gözat
      </Link>
    </div>
  );
};

export default Warning;
