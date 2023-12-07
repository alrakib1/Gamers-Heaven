import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Card = ({ service }) => {
  useEffect(()=>{
    Aos.init({duration: "1000", delay:"500"});
  },[])
  const { name, price, image, id, description } = service;
  return (
    <div className="card card-compact w-[310px] md:w-[350px] lg:w-full mx-auto  bg-base-100 shadow-xl" data-aos="fade-down">
      <figure>
        <img className="w-full h-[200px] lg:h-[250px]"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p>{description}</p>
        <p className="font-bold text-blue-700 text-xl">{price}</p>
            <p className="text-center">Want to learn about More ?</p>
        <div className="card-actions justify-center">
            <Link to={`/details/${id}`}><button className="btn btn-primary">Details</button></Link>
          
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  service: PropTypes.object,
};
export default Card;
