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
        },
        {
            id: "3",
            name: "Tara sobrenome",
            position: "Mentor",
        },
        {
            id: "4",
            name: "Cara sobrenome",
            position: "Mentor",
        },
        {
            id: "5",
            name: "Para sobrenome",
            position: "Admin",
        },
        {
            id: "6",
            name: "Iara sobrenome",
            position: "Participante",
        },
        {
            id: "7",
            name: "Bara sobrenome",
            position: "Admin",
        },
        {
            id: "1",
            name: "Sara sobrenome",
            position: "Participante",
        },
        {
            id: "2",
            name: "Mara sobrenome",
            position: "Participante",
        },
        {
            id: "3",
            name: "Tara sobrenome",
            position: "Participante",
        },
        {
            id: "4",
            name: "Cara sobrenome",
            position: "Participante",
        },
        {
            id: "5",
            name: "Para sobrenome",
            position: "Participante",
        },
        {
            id: "6",
            name: "Iara sobrenome",
            position: "Participante",
        },
        {
            id: "7",
            name: "Bara sobrenome",
            position: "Participante",
        },
    ]);

    return ( 
        <div className="people-container">
            <div className="search-person">
                <input 
                   className="search-person-input"
                    value="Buscar"
                    type="text" 
            />
                    <ButtonPeople className="people-button"><BiSearch/></ButtonPeople>
            </div>
            <p> Aqui chamaremos a quantidade de itens mapeados </p>
            <div className="PeopleListBox">
                <People people={people}/>
            </div>
        </div>
     );
}
 
export default PeopleContainer;