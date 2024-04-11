import hotel from '/public/hotel.jpg'
import motel from '/public/motel.avif'
import resort from '/public/resort.jpg'
import lodge from '/public/lodge.jpeg'

const Banner = () => {
    return (
              <div className="carousel  w-full h-[600px]  ">
          
        <div id="slide1" className="carousel-item relative w-full  ">
          <img src={hotel} className="w-full rounded-lg" />
          <div className="hero-content text-center text-neutral-content absolute -mx-1/2 animate__animated animate__fadeIn">
  <div className="max-w-md justify-start">
    <h1 className="mb-5 text-5xl font-bold text-purple-400">Hello.. <br /><span>We are Providing best Services</span> </h1>
      </div>
</div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={motel} className="w-full rounded-lg" />
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={resort} className="w-full rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={lodge} className="w-full rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
        

      </div>
      
    );
};

export default Banner;