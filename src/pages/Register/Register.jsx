import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../authprovider/AuthProvider";
import ScrollToTop from "../../components/ScrollToTop";


const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // submit register
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:;<>,.?~]).{6,}$/;

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else if (!passwordRegex.test(password)) {
      toast.error(
        "Password should have at least one Capital letter and one Special character",
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      return;
    }

    // create user

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Registration successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);

        // update user

        updateUser(name, photo)
          .then(() => {
            // console.log("profile updated");
          })
          .catch(() => {
            // console.log(error);
          });
      })
      .catch((error) => {
        // console.log(error);
        if (error) {
          toast.error("User Already Exits", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          return;
        }
      });

    console.log(name, email, password);
  };

  return (
    <div className="mt-2 mb-3 lg:mb-10 ">
        <ScrollToTop/>
      <Helmet>
        <title>Gamers Heaven | Register</title>
      </Helmet>
      <h3 className="text-4xl text-center mb-6 font-bold">
        Register Now for the best Experience
      </h3>
      <div className="hero">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="URL of Your Picture"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn bg-[#2B3440] text-white">Register</button>
            </div>
          </form>

          <p className="text-center mb-4">
            Already Have an Account ?{" "}
            <Link to="/login" className="text-blue-600 font-bold">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Register;
