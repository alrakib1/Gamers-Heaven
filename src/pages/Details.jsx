import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const {id} = useParams();
    const details = useLoaderData();
    const [detail, setDetail] = useState({});
    const {name, image, description , price } = detail;
  
    useEffect(() => {
      const findDetail = details?.find((detail) => detail.id === parseInt(id));
      setDetail(findDetail);
    }, [id, details]);
    return (
        <div className="max-w-7xl mx-auto bg-slate-300">
            <div className=" flex flex-col justify-center space-y-4 text-center">
                <img src={image} className="w-3/4 h-1/2 mx-auto mt-5" alt="" />
                <h4 className="text-4xl">{name}</h4>
                <p className="text-center">{description}</p>
                <p className="text-center pb-5">{price}</p>
            </div>
        </div>
    );
};

export default Details;