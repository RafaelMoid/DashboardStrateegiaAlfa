import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs';

import "./Person.css";

const Person = ({person , roles}) => {
    return (
        <div className="person-container">          
            <div className="person-icon"><BsFillPersonFill/></div>
            <div className="person-txt-container">
                <p className="person-name"> {person.name} </p>
                <p className="person-position"> {roles} </p>
            </div>
        </div>
    );
}
 
export default Person;