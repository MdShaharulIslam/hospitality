import "../Component/style/style.css";
import hotel from "/public/hotel.jpg";
import motel from "/public/motel.avif";
import resort from "/public/resort.jpg";
import pic1 from "/public/1.jpg";
import pic2 from "/public/2.jpg";
import pic3 from "/public/3.jpg";
import pic4 from "/public/4.jpg";
import { Link } from "react-router-dom";
import Navber from "../Component/Navber/Navber";
const RecentBlogPosts = () => {
  return (
    <div className="mx-6">
      <div className="mc-6"><Navber></Navber></div>
      <h2 className="text-2xl font-bold mb-4 text-center">Gallary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="container">
          <img
            src={hotel}
            alt="Avatar"
            className="image"
            style={{ width: "100%" }}
          />
          <div className="middle">
            <Link to="/">
              <div className="text">Show</div>
            </Link>
          </div>
        </div>
        <div className="container">
          <img
            src={motel}
            alt="Avatar"
            className="image"
            style={{ width: "100%" }}
          />
          <div className="middle">
            <Link to="/">
              <div className="text">Show</div>
            </Link>
          </div>
        </div>

        <div className="container">
          <img
            src={resort}
            alt="Avatar"
            className="image"
            style={{ width: "100%" }}
          />
          <div className="middle">
            <Link to="/">
              <div className="text">Show</div>
            </Link>
          </div>
        </div>
        <div className="container">
          <img
            src={pic1}
            alt="Avatar"
            className="image"
            style={{ width: "100%" }}
          />
          <div className="middle">
            <Link to="/">
              <div className="text">Show</div>
            </Link>
          </div>
        </div>
        <div className="container">
          <img
            src={pic2}
            alt="Avatar"
            className="image"
            style={{ width: "100%" }}
          />
          <div className="middle">
            <Link to="/">
              <div className="text">Show</div>
            </Link>
          </div>
        </div>
        <div className="container">
          <img
            src={pic3}
            alt="Avatar"
            className="image"
            style={{ width: "100%" }}
          />
          <div className="middle">
            <Link to="/">
              <div className="text">Show</div>
            </Link>
          </div>
        </div>
        <div className="container">
          <img
            src={pic4}
            alt="Avatar"
            className="image"
            style={{ width: "100%" }}
          />
          <div className="middle">
            <Link to="/">
              <div className="text">Show</div>
            </Link>
          </div>
        </div>
        <div className="container">
          <img
            src={pic3}
            alt="Avatar"
            className="image"
            style={{ width: "100%" }}
          />
          <div className="middle">
            <Link to="/">
              <div className="text">Show</div>
            </Link>
          </div>
        </div>
        <div className="container">
          <img
            src={pic1}
            alt="Avatar"
            className="image"
            style={{ width: "100%" }}
          />
          <div className="middle">
            <Link to="/">
              <div className="text">Show</div>
            </Link>
          </div>
        </div>

           </div>
      </div>

  );
};

export default RecentBlogPosts;
