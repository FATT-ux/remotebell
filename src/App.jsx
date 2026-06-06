import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { FaBars } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import AlarmComponent from "./components/AlarmComponent";
import Schedule from "./components/Schedule/Schedule";
import SideBar from "./components/SideBar";

function App () {
    const [onSideBar, setOnSideBar] = useState(false)
    return(
        <>
            <Header />
            <FaBars className="sidebar-icon" onClick={() => setOnSideBar(!onSideBar)}/>
                {onSideBar ? <SideBar setOnSideBar={setOnSideBar} /> : null}
            <main className="main">
                <AlarmComponent/>  
                <Schedule />
            </main>

            <ToastContainer position="bottom-right" autoClose={1000} />
        </>
    )
}

export default App