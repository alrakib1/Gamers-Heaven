import { useContext } from "react";
import { AuthContext } from "../components/authprovider/AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {

    const {singIn}= useContext(AuthContext);


// login in user
const handleLogIn = e =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    singIn(email,password).then(result=>{
        console.log(result.user)
    }).catch(error=>{

        console.log(error)
    })
    
    console.log(email,password);
}












    return (
        <div className="my-10 ">
          <h3 className="text-4xl text-center mb-8">Register Now</h3>
            <div className="hero">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogIn }>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mb-4">New Here ? <Link to='/register' className="text-orange-500 font-bold">Register</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;