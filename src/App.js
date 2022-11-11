import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/Routes/Routes';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      {/* <ToastContainer></ToastContainer> */}
    </div>
  );
}

export default App;
