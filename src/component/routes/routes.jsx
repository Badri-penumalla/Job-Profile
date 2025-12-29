import { createBrowserRouter } from "react-router-dom";
import Login from '../login/Login';
import Register from '../register/Register';
import VerifyOtp from "../register/VerifyOtp";
import Home from "../../home/Home";

const routers = createBrowserRouter(
    [
        {
            path: "/login",
            element: <Login/>
        },{
            path: "/",
            element: <Register/>
        },{
            path: "/verify-otp",
            element: <VerifyOtp/>
        },{
            path: "/home",
            element: <Home/>
        }
    ]
)

export default routers;