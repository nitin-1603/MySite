import Form from "./childcomponents/Form"
import Navbar from "./childcomponents/Navbar"
import EffectHook from "./childcomponents/EffectHook";
import MemoHook from "./childcomponents/MemoHook";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const Home = () => {
    
    //useCallback function

    // const callfunc = useCallback(
    //     () => {
    //         console.log('hey callfunc');
    //     }
    //     , []
    // )

    const callfunc = () => {
        console.log('hey callfunc');
    }

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
            element: <><Navbar /> <MemoHook callfunc={callfunc} /></>
        }
    ])


    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Home
