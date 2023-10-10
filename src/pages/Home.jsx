import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import Card from "../components/gamesdata/Card";
const Home = () => {
  const services = useLoaderData();
  useEffect(() => {
    Aos.init({ duration: "1000", delay: "500" });
  }, []);

  return (
    <div className="mt-2 lg:mt-7 max-w-7xl mx-auto">
      <Marquee className="bg-slate-400">
        <p className="text-xl font-bold text-white mr-10">
          10% off on vip subscription!!!!!
        </p>
        <p className="text-xl font-bold text-white mr-10">
          10% off on vip subscription!!!!!
        </p>
        <p className="text-xl font-bold text-white">
          10% off on vip subscription!!!!!
        </p>
      </Marquee>

      <h2
        className="text-2xl md:text-4xl text-center font-bold mb-5"
        data-aos="flip-left"
      >
        Welcome
      </h2>
      {/* banner */}

      <div className="carousel lg:h-[550px]" data-aos="slide-up">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/J25WTKP/4c3f95119443737-609d6a740d9e3.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/PDSQstM/tour-article-banner-2000x800.png"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/bsV9xnX/csgo-tournaments.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
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
      <h2
        className="text-2xl md:text-4xl text-center font-bold mt-5 mb-5"
        data-aos="flip-right"
      >
        Our Services
      </h2>
      <div
        className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 mt-10 mb-10"
        data-aos="flip-right"
      >
        {services.map((service) => (
          <Card key={service.id} service={service}></Card>
        ))}
      </div>
      {/* live section */}
      <div
        className="hero lg:h-[550px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/R7JbY1H/diverse-group-young-people-watching-footage-201054831-iconl.webp)",
        }}
        data-aos="fade-up"
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Watch Our Streams</h1>
            <button className="btn bg-red-500 hover:bg-red-300 border-0 text-white normal-case">
              Click To Start
            </button>
          </div>
        </div>
      </div>

      {/* match result */}
      <div>
        <h2
          className="text-2xl md:text-4xl text-center font-bold mt-5 mb-5"
          data-aos="flip-right"
        >
          Match Results
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
          {/* match-1 and match-2 */}
          <div className="flex justify-center items-center gap-5" data-aos="zoom-in-up">
          <div data-aos="flip-right">
            <div className="card bg-base-100 border">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/pRXfQmG/6335508195f58.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Team Alpha</h2>
                <p className="font-semibold">Score : 10</p>
              </div>
            </div>
          </div>
          <div data-aos="flip-right">
            <p className=" text-3xl font-bold">vs</p>
          </div>
          <div data-aos="flip-left">
            <div className="card bg-base-100 border" >
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/2cvvXfK/5f5f16b99105c716307120-2.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center" >
                <h2 className="card-title font-bold">Team Delta</h2>
                <p className="font-semibold">Score : 7</p>
              </div>
            </div>
          </div>
        </div>

          <div className="flex justify-center items-center gap-5" data-aos="zoom-in-up">
          <div data-aos="flip-right">
            <div className="card bg-base-100 border">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/DzdpdjS/K224-Qu-Sa-400x400-1.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Team Hyper</h2>
                <p className="font-semibold">Score : 8</p>
              </div>
            </div>
          </div>
          <div data-aos="flip-left">
            <p className=" text-3xl font-bold">vs</p>
          </div>
          <div data-aos="flip-right">
            <div className="card bg-base-100 border">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/8Njm596/download-2-1.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Team Omega</h2>
                <p className="font-semibold">Score : 7</p>
              </div>
            </div>
          </div>
        </div>
          <div className="flex justify-center items-center gap-5" data-aos="zoom-in-down">
          <div data-aos="flip-right"> 
            <div className="card bg-base-100 border">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/JHSXgqB/download-1.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Team Unity</h2>
                <p className="font-semibold">Score : 5</p>
              </div>
            </div>
          </div>
          <div data-aos="flip-right">
            <p className=" text-3xl font-bold">vs</p>
          </div>
          <div data-aos="flip-right">
            <div className="card bg-base-100 border">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/TrysxkH/team-secret-logo-1.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Team Secret</h2>
                <p className="font-semibold">Score : 10</p>
              </div>
            </div>
          </div>
        </div>
          <div className="flex justify-center items-center gap-5" data-aos="zoom-in-down">
          <div data-aos="flip-right">
            <div className="card bg-base-100 border">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/T4XCXMs/600px-TNC-Predator-2021-allmode-1.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Team Predator</h2>
                <p className="font-semibold">Score : 10</p>
              </div>
            </div>
          </div>
          <div data-aos="flip-right">
            <p className=" text-3xl font-bold">vs</p>
          </div>
          <div>
            <div className="card bg-base-100 border">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/g6ynwxD/Team-icon-Team-Empire.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Team Empire</h2>
                <p className="font-semibold">Score : 10</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* web viewers */}
      <div
        className=" flex justify-center items-center mt-8"
        data-aos="flip-right"
      >
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
