import { Link } from "react-router-dom";
import img from "../../../public/error.jpg";
const Error = () => {
  return (
    <div className="bg-black h-screen">
      <div className="flex justify-center text-center">
        <img src={img} alt="" />
      </div>
      <div className="flex justify-center items-center gap-5 pt-10">
        <button className="text-white text-2xl font-bold border border-white px-6 rounded-md py-2 hover:text-primary">
          <Link to="/">Home</Link>
        </button>
        <button className="text-white text-2xl font-bold border border-white px-6 rounded-md py-2 hover:text-primary">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
