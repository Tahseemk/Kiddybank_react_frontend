import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Layout from "../layout/index";


function PrivateRoute({ children}) {
    const { accessToken, user } = useSelector((state) => state.auth);

    if (!accessToken) {
        return <Navigate to="/login" replace />;
    }

    // else if (accessToken && !authenticated) {
    //     return (
    //         <div className='un-auth-page'>
    //             <h1 >This page not for you</h1>
    //         </div>
    //     )
    // }

    return <Layout children={children} />;
}

export default PrivateRoute;
