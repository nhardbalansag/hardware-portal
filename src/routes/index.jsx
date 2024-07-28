import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
    Main,
    About,
    Contact,

    Products,
    AllProducts,
    ProductCategories,

    Home
} from '../pages/_index'

const publicRoutes = createBrowserRouter([
    {
        path:'/',
        Component: Main,
        children:[
            {
                path: "",
                element: <Home />,
            },
            {
                path: "products",
                Component: Products,
                children:[
                    {   
                        path:"",
                        element: <ProductCategories/>
                    },
                    {   
                        path:"all",
                        element: <AllProducts/>
                    }
                ]
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact-us",
                element: <Contact/>
            },
        ]
    }
])

const Routes = () =>{
    return <RouterProvider router={publicRoutes} fallbackElement={<p style={{ color:'red' }}>Loading...</p>} />;
}

export default Routes;