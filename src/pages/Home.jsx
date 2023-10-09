import { useLoaderData } from "react-router-dom";
import Card from "../components/gamesdata/Card";

const Home = () => {
  const services = useLoaderData();
 
  return (
    <div className="mt-2 lg:mt-10 max-w-7xl mx-auto">

      {/* banner */}

      <div className="carousel lg:h-[550px]">
        <div id="item1" className="carousel-item w-full ">
          <img
            src="https://i.ibb.co/J25WTKP/4c3f95119443737-609d6a740d9e3.jpg"
            className="w-full "
          />
        </div>
        <div id="item2" className="carousel-item w-full ">
          <img
            src="https://i.ibb.co/PDSQstM/tour-article-banner-2000x800.png"
            className="w-full "
          />
        </div>
        <div id="item3" className="carousel-item w-full ">
          <img
            src="https://i.ibb.co/bsV9xnX/csgo-tournaments.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full ">
          <img
            src="https://i.ibb.co/Y00JXfT/league-of-legends-tournaments.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      {/* service section */}
      <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 mt-10 mb-10 lg:mt-20">
        {
          services.map(service=><Card key={service.id} service={service}></Card>)
        }
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;
