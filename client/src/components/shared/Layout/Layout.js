import React from 'react'
import Header from './header'
import Footer from './footer'
// import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import Sidebar from "./Sidebar";
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="row g-0">
                <div className="col-md-3">
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"

                    />
                    <Sidebar />
                </div>
                <div className="col-md-9">{children}</div>
            </div>


            {/* <Header />
            <main style={{ minHeight: "100vh" }}>
               <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                     pauseOnHover
                    theme="light"

                />



                {children}
            </main> */}
            <Footer />

        </>
    )
}

export default Layout