import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        errorElement:<NotFound/>,
        children:[
            {index:true, element:<Home/>},
            {path:'category',element:<Category/>},
            {path:'product', element:<Product/>},
            {path:'order', element:<Order/>},
            {path:'contact', element:<Contact/>},
            {path:'about', element:<About/>},
            {path:'cart', element:<Cart/>},
            {path:'signup', element:<Signup/>},
            {path:'signin',element:<Signin/>},
        ],
    },
])

function AppRouter(){
    return <RouterProvider router={router}/>;
}

export default AppRouter;