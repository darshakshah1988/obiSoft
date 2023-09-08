import React from 'react'
import { Sidebar } from './Sidebar'
import { Dashboardcards } from './Dashboardcards'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export function Dashboard(props) {
    

    return (
        <>
            <ToastContainer />
            <Sidebar />
            <Dashboardcards />
        </>
    )
}
