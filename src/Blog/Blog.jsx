
import { Helmet } from 'react-helmet';
import Navber from '../Component/Navber/Navber';
import hotel from '/public/hotel.jpg'
import motel from '/public/motel.avif'
import resort from '/public/resort.jpg'
import lodge from '/public/lodge.jpeg'

const Blog = () => {const myFunction = (imgs) => {
    const expandImg = document.getElementById("expandedImg");
    const imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  };
    return (
        <div className='mx-6'>
            <Navber></Navber>
              <Helmet><title>Blogs</title></Helmet>
            

    <div style={{ textAlign: "center" }}>
      <h2>Tabbed Image Gallery</h2>
      <p>Click on the images below:</p>

      {/* The four columns */}
      <div className="row">
        <div className="column">
          <img
            src={hotel}
            alt="Nature"
            style={{ width: "100%" }}
            onClick={(e) => myFunction(e.target)}
          />
        </div>
        <div className="column">
          <img
            src={motel}
            alt="Snow"
            style={{ width: "100%" }}
            onClick={(e) => myFunction(e.target)}
          />
        </div>
        <div className="column">
          <img
            src={resort}
            alt="Mountains"
            style={{ width: "100%" }}
            onClick={(e) => myFunction(e.target)}
          />
        </div>
        <div className="column">
          <img
            src={lodge}
            alt="Lights"
            style={{ width: "100%" }}
            onClick={(e) => myFunction(e.target)}
          />
        </div>
      </div>

      <div className="container">
        <span
          onClick={() => (document.getElementById("container").style.display = "none")}
          className="closebtn"
        >
          &times;
        </span>
        <img id="expandedImg" style={{ width: "100%" }} />
        <div id="imgtext"></div>
      </div>
    </div>
 

   
         </div>
    );
};

export default Blog;
