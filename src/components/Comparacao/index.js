import React from 'react';
import Navbar2 from "../Navbarv2";
import ChartPAtivas from "../Charts/ChartPAtivas";
import "./index.css";

function Comparacao() {

    //Salve salve do passado pra ti
    //Saca só, aqui vou inserir uma bibliotera mockada de dados que pode ser trocados por json para
    //de outra origem depois

    const projetos1=[
        {nome:"Strateegia Studio", status:"ativo", pessoas:"25 participantes"},
        {nome:"Projeto Moura fácil", status:"concluido", pessoas:"125 participantes"},
        {nome:"TreeloStudio", status:"ativo", pessoas:"22 participantes"},
        {nome:"Projeto Rafa é desenrolado", status:"ativo", pessoas:"48 participantes"},
        {nome:"Projeto Nath é uma artista", status:"ativo", pessoas:"87 participantes"},
        {nome:"Projeto Matheus é um mago", status:"concluido", pessoas:"35 participantes"},
        {nome:"Projeto Akira", status:"concluido", pessoas:"39 participantes"},
        {nome:"Godzilla", status:"concluido", pessoas:"42 participantes"},
        {nome:"Sem criatividade 9", status:"concluido", pessoas:"12 participantes"},
        {nome:"Sem criatividade 10", status:"concluido", pessoas:"0 participantes"},
        {nome:"Sem criatividade 11", status:"concluido", pessoas:"135 participantes"},
        {nome:"Sem criatividade 12", status:"concluido", pessoas:"15 participantes"},
        {nome:"Sem criatividade 13", status:"concluido", pessoas:"78 participantes"},
        {nome:"Sem criatividade 14", status:"concluido", pessoas:"2 participantes"},
      ];
      const listaProjetosNome=projetos1.map(
        (c,i)=>
          <li key={i} className="ulItem">{c.nome}</li>
          )


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
                       <select className="dropdown">
                            <option value="Project 1">Project 1</option>
                            <option value="Project 2">Project 2</option>
                            <option value="Project 3">Project 3</option>
                        </select>
                     
                        <div className="wrapperProj">
                            <h3>mediana</h3>
                             <div>
                             <ul className="listaProjetos">
                                {listaProjetosNome}
                             </ul>
                                                 </div>
                        </div>
                    </div>
                    <div div className="compProj">
                     <h3 className="titleComp">Comparativo por índice dos projetos</h3>
                     <div className="charts">
                         <div className="chartsContent">
                             <ChartPAtivas/>
                             <div className="iconAndText">
                                <img src="group.svg" className="iconComp"/>
                                <p>Pessoas ativas<br/>na jornada</p>
                             </div>
                             </div>
                         <div className="chartsContent">
                             <ChartPAtivas/>
                             <div className="iconAndText">
                                <img src="squareChat.svg" className="iconComp"/>
                                <p>Pessoas ativas<br/>na jornada</p>
                             </div>
                             </div>
                         <div className="chartsContent">
                             <ChartPAtivas/>
                             <div className="iconAndText">
                                <img src="circledQuestion.svg" className="iconComp"/>
                                <p>Pessoas ativas<br/>na jornada</p>
                             </div>
                             </div>
                         <div className="chartsContent">
                             <ChartPAtivas/>
                             <div className="iconAndText">
                                <img src="chatBubbles.svg" className="iconComp"/>
                                <p>Pessoas ativas<br/>na jornada</p>
                             </div>
                             </div>
                         </div>
                     
                    
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