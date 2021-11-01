import React from 'react';
import Navbar2 from "../Navbarv2";
import "./index.css";

function Comparacao() {
    return (
        
        <div className="comparacao">
        <Navbar2 />
            <div className="wrapper">
                <div className="containerTxt">
                    <p>dashboard {'>'} comparação avançada</p>
                    <h1>Comparação avançada </h1>
                    <h3>Selecione até 5 jornadas para comprar os índices</h3>
                </div>

                <div className="comp1">
                    <div className="jornadas">

                    </div>
                    <div div className="compProj">

                    </div>
                </div>
                <div className="comp2">
                    <div className="notes">

                    </div>
                    <div className="balanceProj">

                    </div>
                </div>
            </div>
          </div>
            
       
    );
}

export default Comparacao;