import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

export default function Details({ data }) {
    
    let [ info, setInfo ] = useState({ details: {} });
    let [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        async function getDetails() {
            setIsLoading(true);
            const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${ data }.json`);
            const newDetails = await response.json();
            setInfo(newDetails);
            setIsLoading(false)
        }
        getDetails();
    }, [data]); 
        
    
    

    return (
        <div className="details">
            { !isLoading ? 
            <div className='details_info'>
                <div className={classNames('details_info_item', 'details_info_avatar')}>
                    <img src={info.avatar} alt={info.name}/>
                </div>
                <div className={classNames('details_info_item', 'details_info_item_string', 'details_info_name')}>
                    {info.name}
                </div>
                <div className={classNames('details_info_item', 'details_info_item_string', 'details_info_city')}>
                    City: {info.details.city}
                </div>
                <div className={classNames('details_info_item', 'details_info_item_string', 'details_info_company')}>
                    Company: {info.details.company}
                </div>
                <div className={classNames('details_info_item', 'details_info_item_string', 'details_info_position')}>
                    Position: {info.details.position}
                </div>
            </div>
            
            : <div className='delails_loading'><img className='delails_loading_img' src='https://media.tenor.com/images/cac6f4f6ddbe92403ef75aab346d1f59/tenor.gif' alt='Loading'/></div> } 
            
        </div>
    )
}
