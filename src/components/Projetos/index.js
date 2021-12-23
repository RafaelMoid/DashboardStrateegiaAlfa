import React, { useContext, useEffect, useState } from "react";
import Navbar2 from "../Navbarv2";
import "./index.css";
import ChartJourney1 from '../ChartsJourney/ChartJourney1.js';
import ChartJourney2 from '../ChartsJourney/ChartJourney2.js';
import PeopleContainer from '../PeopleList/PeopleContainer.jsx';
import {fetchMapById, fetchMapStatistics} from "../../services/requestFunctions";
import { AuthContext } from "../providers/auth";

import {BsFillPersonFill} from 'react-icons/bs';

function Projetos() {

    
    
    //State responsavel por mostrar as visualizações do dropdown
    const [viewMode, setViewMode] = useState("indices");
    console.log(viewMode);
    const auth = useContext(AuthContext);
    const [project, setProject] = useState({});
    const [projectStatistics, setProjectStatistics] = useState({});

    const newDate = new Date(project.created_at);

    //console.log("project set" , project);
    //console.log("projectStatistics set" , projectStatistics);

    useEffect(() => {
        fetchMapById().then((response) => {
          //console.log(user)
          //console.log( "Map1" , response);
          setProject({...response});
        });

        
        fetchMapStatistics().then((response) => {
            //console.log(user)
            //console.log("Map2" ,response);
            setProjectStatistics({...response});
        }

    )}, [] );

  

    // function handleSelection(e){
    //     setViewMode(e.target.value)
    // }; 

    return (
        
        <div className="desenvolvedores">
        <Navbar2 />
            <div className="mainWrapper">
                <div className="textTitle">
                    <p>dashboard {'>'} página de projeto</p>
                </div>
                <div className="resumoJornada">
                    <img src="group96.svg" className="imgProjetcs"/>
                    <div className="infoP">
                        <h1>{project.title}</h1>
                        <p className="titleP">criada em {newDate.getDay()}/{newDate.getMonth()}/{newDate.getFullYear()}</p>
                        <p className="titleP">última atividade 2 dias atrás</p>
                    </div>
                </div>
                <div className="introData">
                    {/* <h3>Modo de visualização</h3>
                    <div className="inferior">
                        <p>Selecione um tipo de visualização das informações da jornada</p>
                        
                         <select className="dropdownData" onChange={handleSelection} defaultValue={viewMode}>
                                <option value="indices" >Índices</option>
                                <option value="jornadas" >Jornadas</option>
                                <option value="participantes" >Participantes</option>
                                <option value="ferramentas" >Ferramentas</option>
                        </select> 
                    </div> */}
                </div>
                <div className="dataWrapper">
                    <div className="data">
                        <ChartJourney1 props={projectStatistics} props2={project}/>                        
                    </div>
                    {/* <div className="data">
                        {viewMode === "indices" && <ChartJourney1/>}
                        {viewMode === "jornadas" && <ChartJourney2/>}
                        {viewMode === "participantes" && <ChartJourney1/>}
                        {viewMode === "ferramentas" && <ChartJourney1/>}
                        
                    </div> */}
                    
                </div>
            </div>
            <div className="rightBar">
                    <PeopleContainer />
                    <h3 className="partTitle">Participantes mais influentes</h3>
                    {/* MOACKADINHO DO SUCESSO */}

                    <div className="theBestWrapper">
                        <div className="theBest">
                        <div className="ball"></div>
                            <div className="person-txt-container">
                                <p> Matheus </p>
                            </div>
                        </div>
                        <div className="theBest">
                        <div className="ball"></div>
                            <div className="person-txt-container">
                                <p> Nath </p>
                            </div>
                        </div>
                        <div className="theBest">
                        <div className="ball"></div>
                            <div className="person-txt-container">
                                <p> Rafael </p>
                            </div>
                        </div>
                    </div>

                    <div className="bestInteractionContainer">
                        <h3 className="bICTitle">Comentários com mais interações</h3>
                        <p className="bICText">comentário bem longo que foi escirto na strateegia, 
                            porque eu preciso de uma exemplo para os comentários 
                            com mais concordos do rolê
                        </p>
                        <p>

                        </p>
                    </div>

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