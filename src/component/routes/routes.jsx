import { createBrowserRouter } from "react-router-dom";
import Login from '../login/Login';
import Register from '../register/Register';

const routers = createBrowserRouter(
    [
        {
            path: "/login",
            element: <Login/>
        },{
            path: "/",
            element: <Register/>
        }
    ]
)

export default routers;