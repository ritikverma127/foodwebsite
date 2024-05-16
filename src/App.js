import Second from "./Navbarsecond/Second";
import Navbar from "./Navigation/Navbar";
import Third from "./ThirdSection/Third";
import Four from "./Four/Four";
import Login from './Login/Login';
import Contact from "./Contact/Contact"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Navbar/>
    },
    {
      path:'/Login',
      element:<><Navbar/><Login/></>
    },
    {
      path:'/Contact',
      element:<><Navbar /><Contact /></>
    }
  ])
  return (
    <div>
      {/* <Navbar /> */}
     <RouterProvider router={router}/>
      <Second />
      <Third />
      <Four />
    </div>
  );
}

export default App;
