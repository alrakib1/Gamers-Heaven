

const Home = () => {
    return (
        <div className="mt-5 md:mt-10">

            {/* banner */}

            <div className="carousel ">
  <div id="item1" className="carousel-item w-full h-1/2">
    <img src="https://i.ibb.co/GdRHCwb/pubg-mobile-esports-sportstiger-1676200622384-original-1.jpg" className="w-full h-3/4" />
  </div> 
  <div id="item2" className="carousel-item w-full h-1/2">
    <img src="https://i.ibb.co/HCRVLJM/Everything-coming-in-Valorant-Yr1-Anniversary-event.jpg" className="w-full h-3/4 " />
  </div> 
  <div id="item3" className="carousel-item w-full h-1/2">
    <img src="https://i.ibb.co/mbWLYj8/Download-wallpaper-1280x720-counter-strike-global-offensive-cs.jpg" className="w-full h-3/4" />
  </div> 
  <div id="item4" className="carousel-item w-full h-1/2">
    <img src="https://i.ibb.co/0Yck2z6/wallpapersden-com-league-of-legends-2023-1280x720.jpg" className="w-full h-3/4" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Home;