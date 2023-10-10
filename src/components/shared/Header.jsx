import moment from "moment";

const Header = () => {
  return (
    <div className="mb-3 mt-3 max-w-7xl mx-auto" >
      <div className="flex flex-col justify-center items-center">
        <img className="h-1/2"
          src="https://i.ibb.co/5xKV4Pc/download-removebg-preview.png"
          alt=""
        />
      <p className="text-center mt-5 lg:mb-2 text-xl">Experience the best services</p>
      <p className="text-center">{moment().format("[Today is] dddd")}</p>
      </div>
    </div>
  );
};

export default Header;
