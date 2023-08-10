import React, { useEffect, useState } from 'react'
import './style.css';
import { Footer } from './Footer';
import axios from 'axios';
import { Devices } from './Devices';
import { Networks } from './Networks';

export function Dashboardcards(props) {
    const [data,setData] = useState([]);
    const [networks,setNetworks] = useState([]);
    //const response = await axios.get("http://localhost:3001/Devices");

    useEffect(() => {
        getData();
        getNetworks();
    },[])

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/Devices");
            setData(response.data);
        } catch(error) {
            console.error("API error:",error);
        }
        
    }

    const getNetworks = async () => {
        try {
            const response = await axios.get("http://localhost:3001/Networks");
            setNetworks(response.data);
        } catch(error) {
            console.error("API error:",error);
        }
        
    }
    

    return (
        <>        
        <div className="cardContainer">
        <Devices data={data} />
        <Networks data={networks} />    
        </div>
        <Footer />
        </>        
        
    )
}
