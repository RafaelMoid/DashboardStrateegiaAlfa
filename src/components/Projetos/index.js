import React, { useContext, useEffect, useState } from "react";
import Navbar2 from "../Navbarv2";
import "./index.css";
import ChartJourney1 from '../ChartsJourney/ChartJourney1.js';
import ChartJourney2 from '../ChartsJourney/ChartJourney2.js';
import PeopleContainer from '../PeopleList/PeopleContainer.jsx';
import {fetchMapById, fetchMapStatistics , 
    fetchProjectById, getCommentsGroupedByQuestionReport,
    getAllDivergencePointsByMapId
} from "../../services/requestFunctions";
import { AuthContext } from "../providers/auth";

import {BsFillPersonFill} from 'react-icons/bs';
import printJS from "print-js";

function Projetos() {

    function printPage() {
        printJS({
            printable: 'printJS-form',
            type: 'html',
            css: ['./index.css' , '../ChartsJourney/ChartJourney1.css', 
            '../ChartsJourney/chartJourneyHorizontal.css', '../PeopleList/PeopleContainer.css'],
            targetStyles: ['*']
            
        })
    };
    
    //State responsavel por mostrar as visualizações do dropdown
    const [viewMode, setViewMode] = useState("indices");
    //console.log(viewMode);
    const auth = useContext(AuthContext);
    const [project, setProject] = useState({});
    const [projectStatistics, setProjectStatistics] = useState({});
    const [projectUsers, setProjectUsers] = useState({});

    const newDate = new Date(project.created_at);

    useEffect(() => {
        fetchMapById().then((response) => {
          //console.log(user)
          console.log( "Map1 (Dados dos mapas)" , response);
          setProject({...response});
          
          //ESSA ESTRUTURA VAI CRIAR UM ARRAY PARA RECEBER O VALOR DE INTERAÇÃO
          // DE CADA USUARIO, QUE SE INICIA VAZIA (PARA QUE DEPOIS EU POSSA ITERAR COM ESTRUTURA
          // DE REPETIÇÃO USANDO UM COUNTER PARA ADICIONAR OS VALORES AS NOVAS CHAVES NOS OBJETOS)
          if (response) {
          let arrayProjectUsers = project.users;
          let usersData = [];
          //console.log('Array de pessoas' , arrayProjectUsers);
        //   arrayProjectUsers.forEach((user) => {
        //     usersData.push({name: user.name , id: user.id , questionsAnswered: 0, totalAgreementsUser: 0})
        //   })
          console.log('Array de pessoas iterado' , usersData)
          }

          let mapsId = [...response.maps];
          console.log('Array da Maps da jornada (Id e Nome)' , mapsId)
          //inserir aqui uma estrutura de repetição que vai realizar o getAllDivergencePointsByMapId
          //para cada id no mapsId, POR ENQUANTO É O MOCKADIN DO SUCESSO
          if (response && projectStatistics !== '') {
              getAllDivergencePointsByMapId().then((response) => {
          console.log("Retorno getAllDivergencePointsByMapId" , response)
        });

        
        fetchMapStatistics().then((response) => {
            //console.log(user)
            console.log("Retorno de fetchMapStatistics (Dados para comparações)" ,response);
            setProjectStatistics({...response});
            
        })
            }
            
        });

        fetchProjectById().then((response) => {
            //console.log(user)
            //console.log("Map3" ,response);
            setProjectUsers({...response});
        });

        

        getCommentsGroupedByQuestionReport().then((response) => {
            console.log('Resposta de getCommentsGroupedByQuestionReport' , response)
        })
}, [] );

  

    // function handleSelection(e){
    //     setViewMode(e.target.value)
    // }; 

    return (
        
        <div className="desenvolvedores">
        <Navbar2 />
            <div id="printJS-form">
                <div className="mainWrapper">
                    <div className="textTitle">
                        <p>dashboard {'>'} página de projeto</p>
                    </div>
                    <div className="resumoJornada">
                        <img src="group96.svg" className="imgProjetcs"/>
                        <div className="infoP">
                            <h1>{project.title}</h1>
                            <p className="titleP">Criada em {newDate.getDay()}/{newDate.getMonth()}/{newDate.getFullYear()}</p>
                            <p className="titleP">Última atividade 2 dias atrás</p>
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
                        <PeopleContainer props={projectUsers}/>
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
                            <p className="bICText">comentário bem longo que foi escrito na strateegia,
                                porque eu preciso de uma exemplo para os comentários
                                com mais concordos do rolê
                            </p>
                            <p>
                            </p>
                        </div>
                        {/* Criar aqui um component para exibir o top 3 de pessoas
                        com mais comentarios na plataformar que não tenham o status de admin
                        ou habilitador */}
                        <button className="btnProj" onClick={printPage}>
                                Baixar relatorio
                        </button>
                    </div>
            </div>
        </div>
            
       
    );
}

export default Projetos;