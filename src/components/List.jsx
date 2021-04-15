import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Details from './Details';
import classNames from 'classnames';

export default function Lsit() {

    let [ persons, setPersons ] = useState([]);
    let [ searchId, setSearchId ] = useState();

    useEffect(() => {
        async function getData () {
            const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
            const users = await response.json();
            setPersons(users);
        }
        getData();
    }, []) 

    function changeId(id) {
        setSearchId(id);
    }

    return (
        <div className='person'>
            <ul className='person_list'>
                {persons.map(item => (
                    <li className={item.id === searchId ? classNames('person_list_item', 'person_list_item_selected') : 'person_list_item'} key={nanoid()} onClick={() => changeId(item.id)}>{item.name}</li>
                ))}
            </ul>
            { searchId ? <Details data={searchId} /> : null }
        </div>
    )
}
