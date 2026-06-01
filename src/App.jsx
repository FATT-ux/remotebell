import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import AlarmComponent from "./components/AlarmComponent";
import Schedule from "./components/Schedule/Schedule";

function App () {
    
    return(
        <>
            <Header />
            <main className="main">
                <AlarmComponent/>  
                <Schedule />
            </main>
            <ToastContainer position="bottom-right" autoClose={1000} />
        </>
    )
}

export default App