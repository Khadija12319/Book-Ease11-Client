import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/Context";
import { Link , useLocation, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
const Register = () => {
    const {createUser,logInGoogle, logInGit} = useContext(AuthContext);
    const [user ,setUser] = useState(null);
    const [registerError, setRegisterError] =useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const formData = new FormData(e.target); 
        console.log(formData);
        const email= formData.get('email');
        const password =formData.get('password');
        console.log(user);
        setRegisterError(null);

        const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])/.test(password);
        if(password.length <6){
            setRegisterError("Paaword should be at least 6 character or long");
            return;
        }else if(!isValidPassword)
        {
            setRegisterError("password should contain at least one uppercase and one lowercase letter");
            return;
        }
        const name =formData.get('name');
        const photoURL =formData.get('photoURL');
        console.log(email,password,name,photoURL);

        if (email && password) {
            // Create user
            createUser(email, password)
            .then(result => {
               const resUser= result.user;
               setUser(resUser);
               updateProfile(resUser,{displayName:name,
            photoURL:photoURL})
            .then()
            .catch()
               console.log(resUser);
               notifySuccess("User created successfully");
               setTimeout(() => {
                navigate(location?.state ? location.state : '/');
            }, 2000);
            })
            .catch(error => {
                console.log("Error creating user:", error);
                setRegisterError(error.message);
            });
        } }
        const handleGoogleLogin = () => {
            // Sign in with Google
            logInGoogle()
            .then(result => {
                const resUser= result.user;
               setUser(resUser);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log("Error signing in with Google:", error);
            });
        }
        const handleGitLogin = () => {
            // Sign in with Git
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
            <Helmet><title>Register</title></Helmet>
            <ToastContainer/>
            <div className="overflow-hidden">
            <div className="mb-20 mt-10">
            <div className="">
                <div className="card shrink-0 w-full" data-aos="flip-down" data-aos-duration="2000">
                <form className="p-8 lg:w-2/6 md:w-4/5 mx-auto border rounded-lg shadow-md" onSubmit={handleLogin}>
                    <div className="form-control">
                        <h4 className="text-4xl font-bold text-center text-[#DD6B20]">Register Now</h4>
                    <label className="label">
                        <span className="label-text text-lg">Full Name</span>
                    </label>
                    <input type="text" name="name" placeholder="full name" className="input input-bordered py-7" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered py-7" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Photo URL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="photo url" className="input input-bordered py-7" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered py-7" required />
                    <span onClick={ () => setShowPassword(!showPassword)} className="md:translate-x-[93%] translate-x-[85%] -translate-y-[40px] text-2xl">{showPassword? <IoEyeOff className="text-orange-600"/> : <IoEye className="text-orange-600"/>}</span>
                    {
                        registerError && <p className="text-red-500">{registerError}</p>
                    }
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-lg text-[#DD6B20]">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-orange-200 text-black hover:text-black text-xl mb-4">Register</button>
                    </div>
                    <div className="mb-4">
                        <p className="text-center">Already have an account? <Link to='/login' className="text-[#DD6B20] underline">Login now</Link></p>
                    </div>
                    
                    <div className="mb-4 flex justify-center gap-6">
                        <button className="p-2 bg-gray-200 rounded-full" onClick={handleGoogleLogin}><FcGoogle className="text-3xl"/></button>
                        <button className="p-2 bg-gray-200 rounded-full" onClick={handleGitLogin}><FaGithub className="text-3xl"/></button>
                    </div>
                </form>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Register;