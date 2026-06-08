import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { FaBars } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import AlarmComponent from "./components/AlarmComponent";
import Schedule from "./components/Schedule/Schedule";
import SideBar from "./components/SideBar/SideBar";
import SideBarWarn from "./components/SideBar/SideBarWarn";
import SideBarAdd from "./components/SideBar/SideBarAdd";
import SideBarSound from "./components/SideBar/SideBarSound";

function App () {

    const [onSideBar, setOnSideBar] = useState(false)
    const [warnSideBar, setWarnSideBar] = useState(false)
    const [SideBarAppend, setSideBarAppend] = useState(false)
    const [SideBarDel, setSideBarDel] = useState(false)

    return(
        <>
            <Header />
            <FaBars className="sidebar-icon" onClick={() => setOnSideBar(!onSideBar)}/>
                {onSideBar ? <SideBar setOnSideBar={setOnSideBar} setWarnSideBar={setWarnSideBar} warnSideBar={warnSideBar} SideBarAppend={SideBarAppend} setSideBarAppend={setSideBarAppend} SideBarDel={SideBarDel} setSideBarDel={setSideBarDel}/> : null}
            <main className="main">
                <AlarmComponent/>  
                <Schedule />
                {warnSideBar ? <SideBarWarn setWarnSideBar={setWarnSideBar} warnSideBar={warnSideBar}/> : null}
                {SideBarAppend ? <SideBarAdd setSideBarAppend={setSideBarAppend} SideBarAppend={SideBarAppend}/> : null}
                {SideBarDel ? <SideBarSound setWarnSideBar={setWarnSideBar} warnSideBar={warnSideBar} SideBarDel={SideBarDel} setSideBarDel={setSideBarDel}/> : null }
                
            </main>

            <ToastContainer position="bottom-right" autoClose={1000} />
        </>
    )
}

export default App