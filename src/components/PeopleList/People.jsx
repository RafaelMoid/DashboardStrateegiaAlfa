import React from 'react'
import Person from './Person.jsx'

const People = ({people}) => {
    return ( 
        <>
            {people.map((person) => (
            <Person key={person.id} person={person}/>
            ))}
        </>
     );
}
 
export default People;