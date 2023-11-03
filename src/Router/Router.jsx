import { createBrowserRouter, } from "react-router-dom";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
     {
          path:"/",
          element:<Layout></Layout>,
          children:[
               {
                    path:'/',
                    element:<h2>hello world</h2>
               }

          ]
     }
])

export default router;