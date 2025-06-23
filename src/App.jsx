import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Home';


import HOMESINGLE from './HOMESINGLE';

import NotFound from './NotFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GaneshStore from './products/Products';

import BulkOrders from './BulkOrders';
import GaneshStore2 from './Addtocart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
       { path: "/", element: <HOMESINGLE /> },
      { path: "/products", element:<GaneshStore/>},
      { path: "/carts", element:<GaneshStore2/>},
      { path: "/bulkorders", element: <BulkOrders/> },
      
    ],
  },
  // { path: "login", element: <Login /> },
  // { path: "register", element: <Registration /> },
  // { path: "siteDetails", element: <CardSite /> },
  // { path: "ele/:id", element: <SingleCard /> },
  // {path:"/addproperties",element:<PropertyForm/>}
  // 404 fallback route — must be last
  ,{ path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <div style={{ backgroundColor: '#f0fff0', color: '#556b2f', minHeight: '100vh' }}>
      <ToastContainer
        position="bottom-right"       // top-left, top-center, bottom-right, etc.
        autoClose={3500}           // milliseconds before auto-close
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick               // close when clicked
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
