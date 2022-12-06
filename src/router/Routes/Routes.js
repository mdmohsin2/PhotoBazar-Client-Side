import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../components/Page/CheckOut/CheckOut";
import Home from "../../components/Page/Home/Home";
import MyInfo from "../../components/Page/Home/MyInfo/MyInfo";
import Login from "../../components/Page/Login/Login";
import PrivateRouter from "../../components/Page/PrivateRouter/PrivateRouter";
import SignUp from "../../components/Page/Resister/SignUp";
import AllReview from "../../components/Page/Review/AllReview";
import Review from "../../components/Page/Review/Review";
import ServiceAdd from "../../components/Page/ServiceAdd/ServiceAdd";
import Services from "../../components/Page/Services/Services";
import ServicesAll from "../../components/Page/ServicesAll/ServicesAll";
import Update from "../../components/Page/Update/Update";
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
                loader: ({ params }) => fetch(`https://assignmet-11-server.vercel.app/serviceAll/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <PrivateRouter><Review></Review></PrivateRouter>,
                loader: ({ params }) => fetch(`https://assignmet-11-server.vercel.app/serviceAll/${params.id}`)
            },
            {
                path: '/serviceAdd',
                element: <PrivateRouter><ServiceAdd></ServiceAdd></PrivateRouter>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://assignmet-11-server.vercel.app/singleReview/${params.id}`)
            },
            {
                path: '/allReview',
                element: <AllReview></AllReview>
            }
        ]

    },
    {
        path: '*',
        element: <Error></Error>
    }
]);

export default router;

