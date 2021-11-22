import React, {useState} from 'react';
import Navbar2 from "../Navbarv2";
import "./index.css";
import ChartJourney1 from '../ChartsJourney/ChartJourney1.js';
import ChartJourney2 from '../ChartsJourney/ChartJourney2.js';
import PeopleContainer from '../PeopleList/PeopleContainer.jsx';

function Projetos() {

    
    
    //State responsavel por mostrar as visualizações do dropdown
    const [viewMode, setViewMode] = useState("indices");
    console.log(viewMode);

    function handleSelection(e){
        setViewMode(e.target.value)
    }; 

    return (
        
        <div className="desenvolvedores">
        <Navbar2 />
            <div className="mainWrapper">
                <div className="textTitle">
                    <p>dashboard {'>'} página de projeto</p>
                </div>
                <div className="resumoJornada">
                    <img src="group96.svg" className="img"/>
                    <div className="infoP">
                        <h1>Nome da Jornada/Projeto </h1>
                        <p className="titleP">criada em 04/02/21</p>
                        <p className="titleP">última atividade 2 dias atrás</p>
                    </div>
                </div>
                <div className="introData">
                    <h3>Modo de visualização</h3>
                    <div className="inferior">
                        <p>Selecione um tipo de visualização das informações da jornada</p>
                        <select className="dropdownData" onChange={handleSelection} defaultValue={viewMode}>
                                <option value="indices" >Índices</option>
                                <option value="jornadas" >Jornadas</option>
                                <option value="participantes" >Participantes</option>
                                <option value="ferramentas" >Ferramentas</option>
                        </select>
                    </div>
                </div>
                <div className="dataWrapper">
                    <div className="data">
                        {viewMode === "indices" && <ChartJourney1/>}
                        {viewMode === "jornadas" && <ChartJourney2/>}
                        {viewMode === "participantes" && <ChartJourney1/>}
                        {viewMode === "ferramentas" && <ChartJourney1/>}
                        
                    </div>
                    
                </div>
            </div>
            <div className="rightBar">
                    <PeopleContainer />
                    <h3 className="partTitle">Participantes mais influentes</h3>
                    {/* Criar aqui um component para exibir o top 3 de pessoas
                    com mais comentarios na plataformar que não tenham o status de admin
                    ou habilitador */}
                    <button className="btnProj">
                            Download PNG
                    </button>
                </div>
        </div>
            
       
    );
}

export default Projetos;