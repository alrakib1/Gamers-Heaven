import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const gameDetails = useLoaderData();
  const [detail, setDetail] = useState({});
  const { name, image, details } = detail;

  useEffect(() => {
    const findDetail = gameDetails?.find(
      (detail) => detail.id === parseInt(id)
    );
    setDetail(findDetail);
  }, [id, gameDetails]);
  return (
    <div className="max-w-7xl mx-auto bg-[#2B3440] text-white rounded-lg ">
      <div className=" flex flex-col justify-center">
        <img
          src={image}
          className="w-full md:h-[360px] lg:h-[620px] rounded-t-lg mx-auto"
          alt=""
        />
        <h4 className="text-4xl p-5 font-bold">{name}</h4>
        <p className="md:text-xl pb-5 px-5">{details}</p>
      </div>
    </div>
  );
};

export default Details;
