import React, {useState} from 'react';
import ButtonPeople from './ButtonPeople';
import { BiSearch } from 'react-icons/bi';
import People from './People.jsx'

import "./PeopleContainer.css";

const PeopleContainer = () => {

    //State responsavel por popular a lista de usuarios no projeto
    const [people, setPeople] = useState([
        {
            id: "1",
            name: "Sara sobrenome",
            position: "Mentor",
        },
        {
            id: "2",
            name: "Mara sobrenome",
            position: "Mentor",
        }
    ]);

    return ( 
        <div className="people-container">
            <div className="search-person">
                <input 
                   className="search-person-input"
                    defaultValue="Buscar"
                    type="text" 
            />
                    <ButtonPeople className="people-button"><BiSearch/></ButtonPeople>
            </div>
            <div className="PeopleListBox">
                <People people={people}/>
            </div>
        </div>
     );
}
 
export default PeopleContainer;