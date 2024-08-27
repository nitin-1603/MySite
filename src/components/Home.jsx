import Form from "./Navbarchildcomponents/Form"
import Navbar from "./Navbarchildcomponents/Navbar"
import EffectHook from "./Navbarchildcomponents/EffectHook";
import MemoHook from "./Navbarchildcomponents/MemoHook";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MobileSection from "./Body/MobileSection";
import Cart from "./Navbarchildcomponents/Cart";


const Home = () => {


    const router = createBrowserRouter([
        {
            path: '/',
            element: <><Navbar /> </>
        },
        {
            path: '/form',
            element: <><Navbar /> <Form /></>
        },
        {
            path: '/useEffectHook',
            element: <><Navbar /> <EffectHook /></>
        },
        {
            path: '/usememo',
            element: <><Navbar /> <MemoHook /></>
        },
        {
            path: '/cart',
            element: <><Navbar /> <Cart /></>
        }
    ])


    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router} />
                <MobileSection />

            </Provider>
        </>
    )
}

export default Home
