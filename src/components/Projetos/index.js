import React, {useState} from 'react';
import Navbar2 from "../Navbarv2";
import "./index.css";
import ChartJourney1 from '../ChartsJourney/ChartJourney1.js';

function Projetos() {

    const [viewMode, setViewMode] = useState("indices");

    return (
        
        <div className="desenvolvedores">
        <Navbar2 />
            <div className="mainWrapper">
                <div className="textTitle">
                    <p>dashboard {'>'} página de projeto</p>
                    <h1>Nome da Jornada/Projeto </h1>
                </div>
                <div className="resumoJornada">
                    <img src="group96.svg" className="img"/>
                    <div className="infoP">
                        <p className="titleP">etapa</p>
                        <p className="value">MVS</p>
                    </div>
                    <div className="infoP">
                        <p className="titleP">semanas</p>
                        <p className="value">6 semanas</p>
                    </div>
                    <div className="infoP">
                        <p className="titleP">última atividade</p>
                        <p className="value">2 dias atrás</p>
                    </div>
                    <div className="infoP">
                        <p className="titleP">data de criação</p>
                        <p className="value">04/02/21</p>
                    </div>
                </div>
                <div className="introData">
                    <h3>Modo de visualização</h3>
                    <div className="inferior">
                        <p>Selecione um tipo de visualização das informações da jornada</p>
                        <select className="dropdownData">
                                <option value="Project 1" onClick={()=>setViewMode("indices")}>Índices</option>
                                <option value="Project 2" onClick={()=>setViewMode("jornadas")}>Jornadas</option>
                                <option value="Project 3" onClick={()=>setViewMode("participantes")}>Participantes</option>
                                <option value="Project 4" onClick={()=>setViewMode("ferramentas")}>Ferramentas</option>
                        </select>
                    </div>
                </div>
                <div className="dataWrapper">
                    <div className="leftData">
                        {viewMode === "indices" && <ChartJourney1/>}
                        {viewMode === "jornadas" && <ChartJourney1/>}
                        {viewMode === "participantes" && <ChartJourney1/>}
                        {viewMode === "ferramentas" && <ChartJourney1/>}
                        
                    </div>
                    <div className="rightData">
                        <p>Barra e os caraio</p>
                    </div>
                </div>
            </div>
            <div className="rightBar">
                    <p>Pessoas</p>
                </div>
        </div>
            
       
    );
}

export default Projetos;