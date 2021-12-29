import React, {useState, useEffect} from 'react';
import ButtonPeople from './ButtonPeople';
import { BiSearch } from 'react-icons/bi';
import People from './People.jsx'
import {fetchProjectById} from "../../services/requestFunctions";

import "./PeopleContainer.css";

const PeopleContainer = () => {

    //State responsavel por popular a lista de usuarios no projeto
    const [people, setPeople] = useState([
        {
            id: "1",
            name: "Rafael Varela",
            position: "Mentor",
        },
        {
            id: "2",
            name: "é muito limpeza",
            position: "Mentor",
        }
    ]);


    useEffect(() => {
        fetchProjectById().then((users) =>{
            if(users) {
                const usersList = users.users
                // console.log(users)
                // console.log(usersList)

                setPeople(usersList)
            }
        })
    }, []);

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