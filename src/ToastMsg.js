import React ,{useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastMsg() {
    const notify = () => toast("Welcome to Mirror Chat Application !");

useEffect(()=>{
    notify()
},[])

  return (
    <div>
      
        <ToastContainer 
        position="top-right"
        theme='dark'
        autoClose={1500}
        type='success'
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        
        />
      </div>
  )
}

export default ToastMsg