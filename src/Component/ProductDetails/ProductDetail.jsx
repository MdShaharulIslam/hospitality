import Navber from "../Navber/Navber";
import { Link, useLoaderData, useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";

const ProductDetail = () => {
    const products = useLoaderData();
    const {id} = useParams();
    
    const product = products.find(product => product.id === id);
    console.log(product);

            
    return (
        <div className="mx-8">
            <Helmet><title>Product-Details</title></Helmet>
            <Navber></Navber>
           
            <div className="hero rounded-xl bg-purple-400  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">{product.estate_title}</h1>
                        <p className="text-gray-500 pt-4"> {product.segment_name}</p>
                        <hr className="w-full py-4 mt-4" />
                        <p className="text-gray-500 ">{product.description}</p>
                        <hr className="w-full py-4 mt-4" />
                        <p ><span className="font-bold">Price: </span>{product.price} </p>
                        <p className="mt-4 font-bold"><span className="">Satus:{product.status} </span> </p>
                        <p className="mt-4 font-bold"><span className="">Area:{product.area} </span> </p>
                        <hr className="w-full py-4 mt-4" />
                        <p className="mt-4 font-bold "><span className="text-gray-500">Location: </span>{product.location} </p>
                        <p className="mt-4 font-bold "><span className="text-gray-500">Facilities: </span>{product.facilities} </p>
                        <p className="mt-4 font-bold "><span className="text-gray-500">YearOfPublishing: </span>{} </p>
                        <p className="mt-4 font-bold "><span className="text-gray-500">Rating: </span>{} </p>
                        <div className="flex gap-4 mt-4">
                           <Link to="/"> <button  className="btn bg-purple-400">View Nore Product</button></Link>
                           <Link to="/"> <button  className="btn bg-purple-400">{product.status}</button></Link>
                            
                        </div>
                      

                    </div>
                    <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">

                        <div className=" bg-gray-400 shadow-xl h-full w-full  rounded-xl">
                            <img  src={product.image_url} alt="Book" className="rounded-xl w-full h-full" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;