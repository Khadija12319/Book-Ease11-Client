import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import {Navigate , useLocation} from "react-router-dom"
import PropTypes from 'prop-types';
const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner text-center text-orange-600 mx-auto block"></span>;
    }
    if(user){
        return children;
    }

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>);
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
};
export default PrivateRoute;