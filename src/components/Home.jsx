
import Navbar from "./Navbarchildcomponents/Navbar"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MobileSection from "./Body/MobileSection";
import Cart from "./Navbarchildcomponents/Cart";
import Login from "./Navbarchildcomponents/Login";
import Signup from "./Navbarchildcomponents/Signup";


const Home = () => {


    const router = createBrowserRouter([
        {
            path: '/',
            element: <><Navbar /> <MobileSection /></>
        },

        {
            path: '/cart',
            element: <><Navbar /> <Cart /></>
        },
        {
            path: '/login', element: <><Navbar /> <Login /></>
        },
        
        {
            path: '/signup', element: <><Navbar /> <Signup /></>
        },
        
    ])


    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router} />


            </Provider>
        </>
    )
}

export default Home
