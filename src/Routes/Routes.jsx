import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Rooms from "../Components/Rooms/Rooms";
import RoomDetails from "../Components/Rooms/RoomDetails";
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute'
import Booking from "../Components/Booking.jsx/Booking";
import Gellary from "../Components/Home/Gellary/Gellary";

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
                        },
                        {
                            path:'/rooms',
                            element:<Rooms></Rooms>,
                            loader: () => fetch('https://bookeaseclient.vercel.app/rooms')
                        },
                        {
                            path:'/rooms/:id',
                            element:<RoomDetails></RoomDetails>,
                            loader: ({params})=> fetch(`https://bookeaseclient.vercel.app/rooms/${params.id}`)
                        },
                        {
                            path:'/booking',
                            element:<PrivateRoute><Booking></Booking></PrivateRoute>,
                            loader: () => fetch('https://bookeaseclient.vercel.app/rooms')
                        },
                        {
                            path:'/gallery',
                            element:<Gellary></Gellary>, 
                        }
                    ]
            }
        ]
    )  
export default router;