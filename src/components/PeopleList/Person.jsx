import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs';

import "./Person.css";

const Person = ({person}) => {
    return (
        <div className="person-container">            
            <div className="person-icon"><BsFillPersonFill/></div>
            <div className="person-txt-container">
                <p className="person-name"> {person.name} </p>
                <p className="person-position"> {person.project_roles} </p>
            </div>
        </div>
    );
}
 
export default Person;