import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../components/Page/CheckOut/CheckOut";
import Home from "../../components/Page/Home/Home";
import MyInfo from "../../components/Page/Home/MyInfo/MyInfo";
import Login from "../../components/Page/Login/Login";
import SignUp from "../../components/Page/Resister/SignUp";
import Review from "../../components/Page/Review/Review";
import Services from "../../components/Page/Services/Services";
import ServicesAll from "../../components/Page/ServicesAll/ServicesAll";
import Blog from "../../components/Shared/Blog/Blog";
import Error from "../../components/Shared/Error/Error";
import Portfolio from "../../components/Shared/Portfolio/Portfolio";
import Main from "../../Layout/Main";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <MyInfo></MyInfo>
            },
            {
                path: 'portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/serviceAll',
                element: <ServicesAll></ServicesAll>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/serviceAll/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <Review></Review>,
                loader: ({params}) => fetch(`http://localhost:5000/serviceAll/${params.id}`)
            }
        ]

    },
    {
        path: '*',
        element: <Error></Error>
    }
]);

export default router;