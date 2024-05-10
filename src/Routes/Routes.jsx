import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

    const router = createBrowserRouter(
        [
            {
                path:'/',
                element:<App></App>,
                errorElement:<ErrorPage></ErrorPage>,
                children:[
                        {
                            path:'/',
                            element:<Home></Home>
                        },
                        {
                            path:'/login',
                            element:<Login></Login>
                        },
                        {
                            path:"/register",
                            element:<Register></Register>
                        }
                    ]
            }
        ]
    )  
export default router;