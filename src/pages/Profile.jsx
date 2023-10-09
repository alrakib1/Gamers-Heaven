import { getAuth } from "firebase/auth";
import app from "../services/firebase.config";
import { useState, useEffect } from "react";

const auth = getAuth(app);

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
    const [phone, setPhone] = useState('');
  useEffect(() => {
    const user = auth.currentUser;
    if (user !== null) {
      const displayName = user.displayName;
      const userEmail = user.email;
      const userPhotoURL = user.photoURL;
      const userEmailVerified = user.emailVerified;
      const phoneNo = user.phoneNumber;
      setName(displayName);
      setEmail(userEmail);
      setPhotoURL(userPhotoURL);
      setEmailVerified(userEmailVerified);
      setPhone(phoneNo);
    }
  }, []); 

  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      <h3 className="text-4xl text-center mb-10">User Details</h3>
      {photoURL && (
       <div className="avatar">
       <div className="w-24 rounded">
         <img src={photoURL} />
       </div>
     </div>
      )}
      <p className="text-3xl font-bold mt-5">Name: {name}</p>
      <p className="text-2xl font-semibold">Email: {email}</p>
      <p className="text-xl">Email Verified: {emailVerified ? <span className="text-green-600 font-semibold">Yes</span> : <span className="text-red-600 font-semibold">No</span> }</p>
      {
        phone && <p>Phone No : {phone ? phone : 'not provided'}</p>
      }
    </div>
  );
};

export default Profile;
