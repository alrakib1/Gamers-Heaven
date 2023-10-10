import { getAuth } from "firebase/auth";
import app from "../services/firebase.config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const auth = getAuth(app);

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
    const [phone, setPhone] = useState('');
    const [created , setCreated] = useState('')
  useEffect(() => {
    const user = auth.currentUser;
    console.log(user.metadata)
    if (user !== null) {
      const displayName = user.displayName;
      const userEmail = user.email;
      const userPhotoURL = user.photoURL;
      const userEmailVerified = user.emailVerified;
      const phoneNo = user.phoneNumber;
      const creationTime = user.metadata.creationTime;
      setCreated(creationTime)
      setName(displayName);
      setEmail(userEmail);
      setPhotoURL(userPhotoURL);
      setEmailVerified(userEmailVerified);
      setPhone(phoneNo);
    }
  }, []); 
  return (
    <div className="container mx-auto h-screen">
      <Helmet>
    <title>Gamers Heaven | Profile</title>
</Helmet>
      <h3 className="text-4xl text-center mt-10 mb-5 md:mb-10 md:mt-20 font-semibold">User Details</h3>
      <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row ">
  <figure className="md:ml-5"><img className="w-1/4 md:w-full" src={photoURL} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title font-semibold text-2xl">Name: {name}</h2>
    <p className="text-xl font-medium">Email: {email}</p>
    <p className="text-xl font-medium">Email Verified: {emailVerified ? <span className="text-green-600 font-semibold">Yes</span> : <span className="text-red-600 font-semibold">No</span> }</p>
      {
        phone && <p>Phone No : {phone ? phone : 'not provided'}</p>
      }
      <p>Account Created : {created}</p>
    <div className="card-actions justify-end ">
      <Link to='/'><button className="btn bg-[#2B3440] text-white">Go to Home</button></Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default Profile;
