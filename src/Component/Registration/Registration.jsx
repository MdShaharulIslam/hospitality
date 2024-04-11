import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Navber from "../Navber/Navber";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const Registration = () => {
const { createUser } = useContext(AuthContext); 
const [registerError, setRegisterError]= useState();
const [showPassword, setShowpassword] = useState();
const [succes, setSucces] = useState();
const notify = () => toast(registerError,succes);
  const handleRegister = (e) => {
        e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    
    // console.log(name, email, photo, password);

if (password.length < 6) {
  setRegisterError(" Password should be at least 6 characters");
  return;
} else if (!/[A-Z]/.test(password)) {
  setRegisterError("Give a capital letter must");
  return;
}
 else if (!/[a-z]/.test(password)) {
  setRegisterError("Give a small letter must");
  return;
}
setRegisterError(null)
setSucces("User Registration succefuly")
    createUser(email, password) 
    updateProfile(AuthContext.createUser,{
      displayName:name,
      photoURL:photo
    })
      .then(result => {
        console.log(result.user);
        // setSucces("User Registration succefuly");
        toast.success('Sign in successful!');
      })
      .catch(error => {
        
        setRegisterError('error',error.message)
      });
  };

  return (
    <div>
      <Helmet><title>Registration-Form</title></Helmet>
      <Navber></Navber>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-2xl text-center font-poppins font-bold">
                Register Your Account
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Picture"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="relative">
          <input
            className="input input-bordered w-full py-2 px-4"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            name="password"
            id=""
            required
          />
          <span
            className="absolute top-4 right-2 "
            onClick={() => setShowpassword(!showPassword)}
          >
            {showPassword ? (
              <FaRegEyeSlash></FaRegEyeSlash>
            ) : (
              <FaRegEye></FaRegEye>
            )}
          </span>
          </div>
              <div className="form-control mt-6">
                <button onClick={notify} className="btn bg-purple-400">Register</button>
              </div>
            </form>
            <ToastContainer />
            {/* {registerError && <p className="text-red-600">{notify}</p>} */}
        {/* {succes && <p className="text-green-600">{succes}</p>} */}
            <p className="text-center mb-4">
              Already Registered? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
