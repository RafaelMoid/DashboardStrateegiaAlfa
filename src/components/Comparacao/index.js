import React, { useContext, useEffect, useState } from 'react';
import Navbar2 from "../Navbarv2";
import ChartPAtivas from "../Charts/ChartPAtivas";
import ChartEQuestoes from "../Charts/ChartEQuestoes";
import ChartEDebates from "../Charts/ChartEDebates";
import ChartEDiver from "../Charts/ChartEDiver";
import Chart from "../HorizontalCharts/Chart";
import Legend from '../HorizontalCharts/legend';
import { AuthContext } from "../providers/auth";
import {fetchUserProjects, fetchMapStatisticsComp} from "../../services/requestFunctions";
import "./index.css";

function Comparacao() {

    const [journeys, setJourneys] = useState([]);
    const [listSelectedProject, setListSelectedProject] = useState([]);

    const [journeysList, setJourneysList] = useState([]);

    const auth = useContext(AuthContext);

    const [props1, setProps1] = useState([]);
    const [props2, setProps2] = useState([]);
    const [props3, setProps3] = useState([]);
    const [props4, setProps4] = useState([]);
    // const [props5, setProps5] = useState([]);

    useEffect(() => {
          fetchUserProjects(auth.apiToken ).then((data) => {
            // console.log("fetchUserProjects data1" , data)
            const currentJourneys = data.map(dt => (
              dt.projects
            ))            
            setJourneys(...[currentJourneys.flat()])
            console.log('Retorno de fetchUserProjects' , currentJourneys.flat())    
           });
      }, [auth.apiToken]);


    const onSelectProject = async ({ target: { value: selectedProject }}) => {

        //console.log('linha 55' , selectedProject)
            let projeto = await fetchMapStatisticsComp(selectedProject)
            console.log('projeto', projeto)
            setJourneysList(state =>([...state, projeto]))

       
    }



    const ListaProjetos = () => {
        return (
            journeys.map((c)=><option value={c.id}>{c.title}</option>)
        );
    }
    const ListaProjetosNome = () => {
        return (
            journeysList.map((c)=><li key={c.id} className="ulItem"><p className="ulItem">{c.title}</p></li>)
        );
    }


             


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
                        {/* Aqui é onde adicionamos os valores na mudança da opção selecionada */}
                       <select className="dropdown" onChange={onSelectProject} disabled={journeysList.length >= 5}> 
                            <option value="default" >Escolha um projeto</option>
                            <ListaProjetos />
                        </select>
                     
                        <div className="wrapperProj">
                            <div>
                                <ul className="listaProjetos2">
                                    <ListaProjetosNome/>
                                </ul>
                            </div>
                        </div>
                </div>
                <div div className="compProj">
                    <h3 className="titleComp">Comparativo por índice dos projetos</h3>
                    <div className="charts">
                        <div className="chartsContent">
                             <ChartPAtivas props={journeysList.map(journey => journey.people_active_count)}/>
                             <div className="iconAndText">
                                <img src="group.svg" className="iconComp"/>
                                <p>Pessoas ativas na jornada</p>
                             </div>
                        </div>
                        <div className="chartsContent">
                             <ChartEDebates props={journeysList.map(journey => parseFloat(
                                                        (journey.agreements_comments_count+journey.reply_comments_count)
                                                        /
                                                        ((journey.parent_comments_count*journey.people_active_count)/2)*100).toFixed(2)
                                                   )} />
                             <div className="iconAndText">
                                <img src="squareChat.svg" className="iconComp"/>
                                <p>Engajamento<br/>nos debates</p>
                             </div>
                        </div>
                        <div className="chartsContent">
                            <ChartEQuestoes props={journeysList.map(journey => parseFloat(
                                                                    journey.parent_comments_count
                                                                    /
                                                                    (journey.question_count*journey.people_active_count)*100)
                                                                    .toFixed(2)
                                                                    )}/>
                            <div className="iconAndText">
                                <img src="circledQuestion.svg" className="iconComp"/>
                                <p>Engajamento<br/>nas questões</p>
                            </div>
                        </div>
                        <div className="chartsContent">
                            <ChartEDiver props={journeysList.map(journey => parseFloat( 
                                                    (journey.parent_comments_count
                                                    /
                                                    (journey.question_count*journey.people_active_count))
                                                    +
                                                    (((journey.agreements_comments_count+journey.reply_comments_count)
                                                    /
                                                    ((journey.parent_comments_count*journey.people_active_count)/2))/2)*100).toFixed(2))
                                                }/>
                            <div className="iconAndText">
                                <img src="chatBubbles.svg" className="iconComp"/>
                                <p>Engajamento<br/>nas divergências</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comp2">
                <div className="notesWrapper">
                    <h2>Notas</h2>
                    <div className="notes">
                        <input type="text" className="notesInput"></input>
                    </div>
                <button> Salvar nota </button>
            </div>
            <div className="balanceProj">
                

                {
                    journeysList.map((journey, index)=> <Chart
                        key={journey.id}
                        title={journey.title.substring(0, 24)}
                        pac={journey.people_active_count}
                        end={calculateEngAtDeb(
                            journey.people_active_count,
                            journey.parent_comments_count,
                            journey.agreements_comments_count,
                            journey.reply_comments_count
                        )}
                        enq={calculateEngAtQuest(
                            journey.people_active_count,
                            journey.parent_comments_count,
                            journey.question_count
                        )}
                        endi={calculateEngAtDiver(
                            journey.agreements_comments_count,
                            journey.reply_comments_count,
                            journey.parent_comments_count,
                            journey.people_active_count,
                            journey.question_count
                        )}
                    />)
                }

                <Legend/>
            </div>

            <div>
                <button className="btnPng">Download PNG</button>
            </div>
        </div>
    </div>
</div>);
}

export default Comparacao;

const calculateEngAtDeb = (
    people_active_count,
    parent_comments_count,
    agreements_comments_count,
    reply_comments_count
    ) => {
        
   return  parseFloat(
    (agreements_comments_count+reply_comments_count)
    /
    ((parent_comments_count*people_active_count)/2)*100).toFixed(2)
}


const calculateEngAtQuest = (
    people_active_count,
    parent_comments_count,
    question_count) => {
        
   return  parseFloat(
    parent_comments_count
    /
    (question_count*people_active_count)*100)
    .toFixed(2)
}

const calculateEngAtDiver = (
    agreements_comments_count,
    reply_comments_count,
    parent_comments_count,
    people_active_count,
    question_count) => {
        
   return  parseFloat( 
    (parent_comments_count
    /
    (question_count*people_active_count))
  +
  (((agreements_comments_count+reply_comments_count)
  /
  ((parent_comments_count*people_active_count)/2))/2)*100).toFixed(2) 
}