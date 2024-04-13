import { Link } from "react-router-dom";
import userME from "/public/pic.jpg"; // Update image import path
import "animate.css";
const Founder = () => {
  return (
    <div className="flex animate__animated animate__fadeInUp">
      <div>
        <h1 className="text-4xl font-bold text-center mb-4">Founder</h1>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="animate__animated animate__fadeInUp">
            <img src={userME} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MD SHAHARUL ISLAM</h2>
            <p>
              Founder of{" "}
              <span className="text-purple-400 font-bold text-4xl">
                Buy sell & Rent
              </span>
            </p>
            <div className="card-actions justify-end">
              <Link to="/contact">
                <button className="btn bg-purple-400 animate__animated animate__fadeIn">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
