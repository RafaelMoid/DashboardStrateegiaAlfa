import React from 'react';
import "./ButtonPeople.css";
//Aqui criamos o botão e usamos as props para passar a função JS onclick para o botão
const Button = ({children, onClick}) => {
    return <button onClick={onClick} className="buttonPeople">{children}</button>;
};
 
export default Button;