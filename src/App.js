
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Components/Routes/Routes';




function App() {
  return (

     <div className='bg-white w-full h-screen'>
      <RouterProvider router={router}></RouterProvider>
     
     </div>
  );
}

export default App;
