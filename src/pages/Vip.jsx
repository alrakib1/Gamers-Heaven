import { FaRegHandPointRight } from "react-icons/fa6";

const Vip = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h3 className="text-4xl text-center mt-10  mb-8 md:mb-16 md:mt-14 font-bold">
        Vip User Perks
      </h3>
      <div className="  space-y-5 font-bold p-2">
        <div className="flex items-center gap-2">
          <FaRegHandPointRight className="text-xl hidden lg:block"></FaRegHandPointRight>{" "}
          <span className="text-green-600 md:text-xl">Early Access </span>{" "}
          <p> :
            VIP ticket holders may get early access to the event or specific
            game demos.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHandPointRight className="text-xl hidden lg:block"></FaRegHandPointRight>{" "}
          <span className="text-green-600 md:text-xl">Exclusive Swag </span> {" "}
          <p> :
           VIP attendees may receive exclusive merchandise, such
          as T-shirts, posters, or collectibles.
        </p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHandPointRight className="text-xl hidden lg:block"></FaRegHandPointRight>{" "}
          <span className="text-green-600 md:text-xl">Priority Seating</span>{" "}
          <p>
          : VIP tickets may provide access to premium seating
          areas during esports tournaments or keynote presentations.
        </p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHandPointRight className="text-xl hidden lg:block"></FaRegHandPointRight>{" "}
          <span className="text-green-600 md:text-xl">Meet and Greets</span>{" "}
          <p>
          : Some VIP packages offer the opportunity to meet game
          developers, esports players, or industry personalities.
        </p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHandPointRight className="text-xl hidden lg:block"></FaRegHandPointRight>{" "}
          <span className="text-green-600 md:text-xl">Private Parties</span>{" "}
          <p>
          : VIP attendees may be invited to exclusive parties or
          receptions.
        </p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHandPointRight className="text-xl hidden lg:block"></FaRegHandPointRight>{" "}
          <span className="text-green-600 md:text-xl">Limited Edition In-Game Items </span>{" "}
          <p>
          : In some cases, VIP attendees may
          receive in-game items or digital content for the games featured at the
          event.
        </p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHandPointRight className="text-xl hidden lg:block"></FaRegHandPointRight>{" "}
          <span className="text-green-600 md:text-xl"> Fast Passes</span>{" "}
          <p>
         : VIP ticket holders might have shorter lines for popular
          attractions or activities.
        </p>
        </div>


        
        
        
        
        
        

      </div>
      <h2 className="text-4xl text-center mt-10 mb-7  lg:mt-20 lg:mb-16 font-bold">
        Our Top vip Users
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Username and level</th>
              <th>Favorite Game</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/mHd19x5/photo-1566753323558-f4e0952af115.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                night_416
                <br />
                <span className="badge badge-ghost badge-sm">level : 30</span>
              </td>
              <td>Valorant</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/YWZBWcy/photo-1545263595-8519601eec49.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                brcie_441
                <br />
                <span className="badge badge-ghost badge-sm">level : 44</span>
              </td>
              <td>Pubg</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/F4Fz5Fc/photo-1604072366595-e75dc92d6bdc.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                rowen_1114
                <br />
                <span className="badge badge-ghost badge-sm">level : 20</span>
              </td>
              <td>League Of Legends</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/nfw041K/1-intro-photo-final.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                yancy_231
                <br />
                <span className="badge badge-ghost badge-sm">level : 40</span>
              </td>
              <td>CS:GO</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vip;
