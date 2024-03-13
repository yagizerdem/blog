import AppLayout from './Layout/AppLayout.jsx';
import HomeLayout from './Layout/HomeLayout.jsx';
import BlogLayout from './Layout/BlogLayout.jsx';
import Header from './components/Header.jsx'
import './styles/App.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutLayout from './Layout/AboutLayout.jsx';
import ContactLayout from './Layout/ContactLayout.jsx';
import { loader as homeLoader } from './Layout/HomeLayout.jsx';
import { loader as blogLoader } from './Layout/BlogLayout.jsx';
import BlogDetailsLayout from './Layout/BlogDetailsLayout.jsx';
import WriteBlogLayout from './Layout/WriteBlogLayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children:[
      {
        path:'/',
        index:true,
        element:<HomeLayout></HomeLayout>,
        loader:homeLoader
      },
      {
        path:'/Blog',
        index:true,
        element:<BlogLayout></BlogLayout>,
        loader:blogLoader
      },
      {
        path:'/About',
        index:true,
        element:<AboutLayout></AboutLayout>
      },
      {
        path:'/Contact',
        index:true,
        element:<ContactLayout></ContactLayout>
      },
      {
        path:'/Details/:id',
        index:true,
        element:<BlogDetailsLayout></BlogDetailsLayout>
      },
      {
        path:'/WriteBlog',
        index:true,
        element:<WriteBlogLayout></WriteBlogLayout>,
      },

    ]
  },
]);


function App() {

  
  return (
    <>  
      <RouterProvider router={router} />
    </>
  )
}

export default App
