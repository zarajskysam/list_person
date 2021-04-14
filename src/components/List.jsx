import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Details from './Details';

export default function Lsit() {

    let [ persons, setPersons ] = useState([]);
    let [ searchId, setSearchId ] = useState(undefined);
    let [ loading, setLoading ] = useState(false);

    useEffect(() => {
        async function getData () {
            // setLoading(true);
            const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
            const users = await response.json();
            console.log(users);
            setPersons(users);
            // setLoading(false);
        }
        getData();
    }, []) 

    function changeId(id) {
        setSearchId(() => (id));
        console.log(id);
    }

    return (
        <React.Fragment>
        <ul className='person-list'>
            {persons.map(item => (
                <li className='person-list-item' key={nanoid()} onClick={() => changeId(item)}>{item.name}</li>
            ))}
        </ul>
        <Details data={searchId}/>
        </React.Fragment>
    )
}
