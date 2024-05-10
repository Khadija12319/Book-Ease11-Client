import { Link , useLocation, useNavigate} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const Login = () => {
    const {logInUser,logInGoogle,logInGit} =useContext(AuthContext);
    const [user ,setUser] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] =useState(null);
    console.log(user);
    const handleLogin = e => {
        e.preventDefault();
        setLoginError(null);
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        logInUser(email,password)
        .then(result => {
            const resUser= result.user;
            setUser(resUser);
            notifySuccess("User Log In successfully");
            setTimeout(() => {
                navigate(location?.state ? location.state : '/');
            }, 2000);
        })
        .catch(error => {
            setLoginError(error.message);
        })
    }

    const handleGoogleLogin = () => {
        // Sign in with Google
        logInGoogle()
        .then(result => {
            const resUser= result.user;
            setUser(resUser);
            console.log(location.state);
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.log("Error signing in with Google:", error);
        });
    }
    const handleGitLogin = () => {
        // Sign in with Google
        logInGit()
        .then(result => {
            const resUser= result.user;
            setUser(resUser);
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.log("Error signing in with Git:", error);
        });
    }
    const notifySuccess = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000, // 3 seconds
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: "#DD6B20",
                color: "#FFF",
            },
            bodyClassName: "text-lg",
            toastClassName: "rounded-lg",
        });
    };
    return (
        <div>
            <Helmet><title>TravelTrance | Login</title></Helmet>
            <ToastContainer/>
            <div className="overflow-hidden">
            <div className="mb-20 mt-10">
            <div className="">
                <div className="card shrink-0 w-full" data-aos="flip-up" data-aos-duration="2000">
                <form className="p-8 lg:w-2/6 md:w-4/5 mx-auto border rounded-lg shadow-md bg-orange-50" onSubmit={handleLogin}>
                    <div className="form-control">
                        <h4 className="text-4xl font-bold text-center text-[#DD6B20]">Login Form</h4>
                    <label className="label">
                        <span className="label-text text-lg">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered py-7" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered py-7" required />
                    <span onClick={ () => setShowPassword(!showPassword)} className="md:translate-x-[93%] translate-x-[85%] -translate-y-[40px] text-2xl">{showPassword? <IoEyeOff className="text-orange-600"/> : <IoEye className="text-orange-600"/>}</span>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-lg text-[#DD6B20]">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-orange-200 text-black hover:text-black text-xl mb-4">Login</button>
                    {
                        loginError && <p className="text-red-500">{loginError}</p>
                    }
                    </div>
                    <div className="mb-2">
                        <p className="text-center">Do not have an account? <Link to='/register' className="text-[#DD6B20] underline">Register now</Link></p>
                    </div>
                    <div className="flex items-center mb-4">
                        <hr className="flex-grow border-t border-gray-300" />
                        <p className="mx-3">or</p>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>
                    <div className="form-control mb-4">
                        <button className="btn bg-orange-200" onClick={handleGoogleLogin}><FcGoogle className="text-3xl"/><span className="text-center text-lg">Login with Google</span></button>
                    </div>
                    <div className="form-control">
                        <button className="btn bg-orange-200" onClick={handleGitLogin}><FaGithub className="text-3xl"/><span className="text-center text-lg">Login with Github</span></button>
                    </div>
                </form>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Login;