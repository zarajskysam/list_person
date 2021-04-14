import React, { useState, useEffect } from 'react'

export default function Details({ data }) {
    
    let [ info, setInfo ] = useState({ details: {} });

    useEffect(() => {
        async function getDetails() {
            const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${ data.id }.json`);
            const newDetails = await response.json();
            setInfo(newDetails);
            console.log(info);
        }
        getDetails();
    }, [data]); 
        
    


    return (
        <div className="details">
            <img src={info.avatar}  className="details-img"/>
        </div>
    )
}
