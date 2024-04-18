import { useContext } from "react";
import { Helmet } from "react-helmet";
import Navber from "../Navber/Navber";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);

    const update = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;

        updateProfile(user, {
            displayName: name,
            photoURL: photourl
        })
        .then(() => {
            toast.success('Profile updated successfully');
           
        })
        .catch((error) => {
            toast.error('Please login your profile');
            console.error('Error updating profile:', error);
        });
    };

    return (
        <div className="mx-8">
            <Helmet><title>Update-Profile</title></Helmet>
            <Navber />
            <div className="px-2 ">
                <Helmet>
                    <title>Update Profile</title>
                </Helmet>
                <div data-aos="flip-left" className=" flex lg:flex-row flex-col justify-center items-center lg:w-[800px] mx-auto border-2 rounded-lg p-5 gap-5 my-10 bg-purple-400">
                    <div className="lg:w-[400px] p-5 space-y-3">
                        {user && user.photoURL && (
                            <img className="w-[100px] rounded-full mx-auto" src={user.photoURL} alt="" />
                        ) || (
                            <p className="text-center border-2 w-[100px] h-[100px] mx-auto">No Image</p>
                        )}
                        {user && user.displayName && (
                            <h2 className="text-base text-center">
                                <span className="font-bold">Name:</span>{user.displayName}
                            </h2>
                        ) || (
                            <p className="text-center border-b-2">No User</p>
                        )}
                    </div>
                    <div className="lg:w-[400px] text-center p-5"> 
                        <form onSubmit={update} className="space-y-3">
                            <input type="text" placeholder="Enter Your Name" name="name" defaultValue={user?.displayName || ''} className="input input-bordered w-full max-w-xs" /> 
                            <input type="text" placeholder="Enter Your Photo-Url" name="photourl" defaultValue={user?.photoURL || ''} className="input input-bordered w-full max-w-xs"/>
                            <button type="submit" className="btn bg-purple-400 lg:w-full text-base text-white">Update</button>
                        </form>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default UpdateProfile;
