import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Marque = () => {
  return (
    <Marquee className="bg-black py-1">
      <Link to="/vip" className="flex gap-10">
        <p className="text-base font-medium text-white ">
          10% off on vip subscription!!!!!
        </p>
        <p className="text-base font-medium text-white ">
          10% off on vip subscription!!!!!
        </p>
        <p className="text-base font-medium text-white mr-10">
          10% off on vip subscription!!!!!
        </p>
      </Link>
    </Marquee>
  );
};

export default Marque;
