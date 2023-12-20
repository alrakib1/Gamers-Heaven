/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import { FaArrowRight } from "react-icons/fa";
const About = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl p-4 mt-14  flex flex-col items-center">
      <Helmet>
        <title>Gamers Heaven | About</title>
      </Helmet>
      <div>
        <h1 className="text-5xl text-center mb-10 font-bold">About Us</h1>
      </div>
      <div className="">
        <p className="text-3xl font-semibold mb-5">
          Welcome to Gamers Heaven, your trusted partner in organizing and
          hosting unforgettable gaming events!
        </p>
        <p className="mb-10">
          At Gamers Heaven, we are passionate about gaming and dedicated to
          delivering exceptional experiences for both gamers and event
          organizers. Whether you're an esports enthusiast, a casual gamer, or a
          professional event planner, we have the expertise and resources to
          make your gaming events a resounding success.
        </p>
        <p className="text-2xl mb-5">Our mission is to:</p>
        <ul className="text-2xl">
          <li className="mb-5 flex items-center gap-4">
            <FaArrowRight></FaArrowRight> Create Engaging Experiences: We
            believe that gaming events should be more than just competitions;
            they should be immersive and engaging for participants and
            spectators alike.
          </li>
          <li className="mb-5 flex items-center gap-4">
            <FaArrowRight></FaArrowRight>Promote Inclusivity: We're committed to
            fostering a diverse and inclusive gaming community where everyone
            feels welcome to participate, regardless of their skill level or
            background.
          </li>
          <li className="mb-5 flex items-center gap-4">
            <FaArrowRight></FaArrowRight>Ensure Professionalism: Our team of
            experienced event organizers and technology experts ensures that
            every event is executed with the utmost professionalism and
            attention to detail.
          </li>
          <li className="mb-5 flex items-center gap-4">
            <FaArrowRight></FaArrowRight>Stay Ahead of Trends: The gaming
            industry is constantly evolving, and we stay at the forefront of
            emerging trends and technologies to provide cutting-edge event
            solutions.
          </li>
        </ul>
        <p className="mb-5 mt-10">
          Whether you're planning a local LAN party, a national esports
          tournament, or a gaming convention, we have the tools and expertise to
          make it a memorable experience. Our comprehensive event management
          services include venue selection, tournament organization, live
          streaming, ticketing, and much more.
        </p>
        <p className="mb-5">
          We take pride in our commitment to excellence and our passion for all
          things gaming. Let us be your partner in bringing your gaming events
          to life!
        </p>
      </div>
    </div>
  );
};

export default About;
