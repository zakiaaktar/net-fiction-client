import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BookService from "../pages/BookService/BookService";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Home/Services/Services";
import Login from "../pages/Login/Login";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import SignUp from "../pages/SignUp/SignUp";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
          {
            path: "/", 
            element: <Home></Home>,
          },
          {
            path: '/services',
            element: <Services></Services>,
        },
        {
            path: 'services/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({ params }) => fetch(`http://localhost:1000/services/${params.id}`)
        },
        {
          path: "book/:id", 
          element: <BookService></BookService>,
          loader: ({ params }) => fetch(`http://localhost:1000/services/${params.id}`)
        },
     
        {
            path: "/login", 
            element: <Login></Login>,
          },
          {
            path: "/signup", 
            element: <SignUp></SignUp>
          },
         
      ]
    },
  ]);


  export default router;