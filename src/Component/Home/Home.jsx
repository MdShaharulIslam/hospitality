import Banner from "../Banner/Banner";
import Navber from "../Navber/Navber";
import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products"; 
import Footer from "../Footer/Footer";
import {Helmet} from "react-helmet";
import Founder from "../Founder/Founder";

const Home = () => {
    const products = useLoaderData();
    // console.log(products);
    return (
        
       <div>
        <Helmet><title>Home</title></Helmet>
         <div className="mx-8">
            <Navber />
            <Banner />
            <h1 className="font-extrabold text-4xl text-center my-4">Our Facilities</h1>
            <p className="text-center">We are Providing Best facilities </p>
            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 my-6 ">
            
                {products.map(product => <Products key={product.id} products={product}></Products>)}
               
            </div>
            <div className="w-auto my-4 justify-center">  <Founder></Founder></div>
          
           
        </div>
        <div className="w-full flex"> <Footer></Footer></div>
       </div>
    );
};

export default Home;
