import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../authprovider/AuthProvider";
import ScrollToTop from "../../components/ScrollToTop";


const Login = () => {
  const { singIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // login in user
  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    singIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful", {
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
      })
      .catch((error) => {
        // console.log(error.message);
        // eslint-disable-next-line no-constant-condition
        if (error) {
          toast.error("wrong email or password", {
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
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        // console.log(result);
        toast.success("Login successful", {
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
      })
      .catch();
  };

  return (
    <div className="mt-2 mb-3 lg:mb-10 lg:mt-5 max-w-7xl mx-auto">
      <Helmet>
        <title>Gamers Heaven | Login</title>
      </Helmet>
      <ScrollToTop/>
      <h3 className="text-4xl text-center mt-14 mb-8 font-bold">
        Login from here
      </h3>
      <div className="hero mb-14">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
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
            <div className="form-control mt-2">
              <button className="btn bg-[#2B3440] text-white">Login</button>
            </div>
            <p className="text-center mb-2 mt-3 font-bold">Or</p>
          </form>
          <div
            className="flex justify-center items-center mb-4 bg-white w-3/4 mx-auto rounded-md cursor-pointer border"
            onClick={handleGoogleSignIn}
          >
            <img
              className="w-[30px] mr-2"
              src="https://i.ibb.co/pxk7F8v/Google-Icons-09-512.webp"
              alt=""
            />
            <p className="text-black font-semibold"> Sign in with Google</p>
          </div>
          <p className="text-center mb-4 font-medium">
            New Here ?{" "}
            <Link to="/register" className="text-orange-500 font-bold">
              Register
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

export default Login;
