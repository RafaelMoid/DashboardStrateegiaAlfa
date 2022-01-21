import React, { useContext, useEffect, useState } from 'react';
import Navbar2 from "../Navbarv2";
import ChartPAtivas from "../Charts/ChartPAtivas";
import ChartEQuestoes from "../Charts/ChartEQuestoes";
import ChartEDebates from "../Charts/ChartEDebates";
import ChartEDiver from "../Charts/ChartEDiver";
import Chart1 from "../HorizontalCharts/Chart1";
import Chart2 from '../HorizontalCharts/Chart2';
import Chart3 from '../HorizontalCharts/Chart3';
import Chart4 from '../HorizontalCharts/Chart4';
import Chart5 from '../HorizontalCharts/Chart5';
import Legend from '../HorizontalCharts/legend';
import { AuthContext } from "../providers/auth";
import {fetchUserProjects, fetchMapStatisticsComp} from "../../services/requestFunctions";
import "./index.css";

function Comparacao() {

    const [journeys, setJourneys] = useState([]);
    const [listSelectedProject, setListSelectedProject] = useState([]);
    const auth = useContext(AuthContext);
    const [props1, setProps1] = useState([]);
    // const [props2, setProps2] = useState([]);
    // const [props3, setProps3] = useState([]);
    // const [props4, setProps4] = useState([]);
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


    const onSelectProject = async ({target:{value:selectedProject}}) => {
        //console.log('linha 55' , selectedProject)
        if(selectedProject){
            let projetos = await fetchMapStatisticsComp(selectedProject)
            //console.log(projetos)
            // setListNomesProjetos(...[projetos])
            //listSelectedProject.push(projetos)
            setListSelectedProject(projects1 => {
                if(projects1.find(({id})=>id===selectedProject)){
                    return projects1
                }
                return [
                    ...projects1,
                    projetos
                ]
            })
            var pAC = listSelectedProject.map(pActCounter => pActCounter.people_active_count);
            setProps1(pAC)
            console.log(props1)
            console.log('retorno do array de selecionados',listSelectedProject)
            
            //Tentativa de atualizar valores da props do chart
            // for (var i = 0; i < listSelectedProject.length; i++)
            //     if (testeProp[i] === 0){
            //     testeProp[i] = listSelectedProject[i].people_active_count;
            //     console.log('teste kkk' , listSelectedProject[i].people_active_count)
            //     }
            // switch (listSelectedProject) {
            //     case listSelectedProject.length = 0:
            //         break;
                    
            //     case listSelectedProject.length = 1:
            //         setProps1(listSelectedProject[0])
            //         console.log('Teste de Switch caso 1' , props1)
            //         break;
                
            //     case listSelectedProject.length = 2:
            //         setProps2(listSelectedProject[1])
            //         console.log('Teste de Switch caso 2' , props2)
            //         break;
                
            //     case listSelectedProject.length = 3:
            //         setProps3(listSelectedProject[2])
            //         console.log('Teste de Switch caso 3' , props3)
            //         break;
                
            //     case listSelectedProject.length = 4:
            //         setProps4(listSelectedProject[3])
            //         console.log('Teste de Switch caso 4' , props4)
            //         break;
                
            //     case listSelectedProject.length = 5:
            //         setProps5(listSelectedProject[4])
            //         console.log('Teste de Switch caso 5' , props5)
            //         break;

            //     default:
            //         console.log("Se nada foi impresso é por que não temos nada selecionado");
                
            // }

            
        }
    }

    
    // const listaProjetosNome = journeys.map((c)=><li key={c.id} className="ulItem"><p className="ulItem">{c.name}</p></li>)


    const ListaProjetos = () => {
        return (
            journeys.map((c)=><option value={c.id}>{c.title}</option>)
        );
    }
    const ListaProjetosNome = () => {
        return (
            listSelectedProject.map((c)=><li key={c.id} className="ulItem"><p className="ulItem">{c.title}</p></li>)
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
                       <select className="dropdown" onChange={onSelectProject}> 
                            <option value="default" >Escolha um projeto</option>
                            <ListaProjetos />
                        </select>
                     
                        <div className="wrapperProj">
                             {/*<h3>mediana</h3>*/}
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
                             <ChartPAtivas props={props1}/>
                             <div className="iconAndText">
                                <img src="group.svg" className="iconComp"/>
                                <p>Pessoas ativas <br/> na jornada</p>
                             </div>
                        </div>
                        <div className="chartsContent">
                             <ChartEQuestoes/>
                             <div className="iconAndText">
                                <img src="squareChat.svg" className="iconComp"/>
                                <p>Engajamento<br/>nos debates</p>
                             </div>
                        </div>
                        <div className="chartsContent">
                            <ChartEDebates/>
                            <div className="iconAndText">
                                <img src="circledQuestion.svg" className="iconComp"/>
                                <p>Engajamento<br/>nas questões</p>
                            </div>
                        </div>
                        <div className="chartsContent">
                            <ChartEDiver/>
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
                <Chart1 pac={props1}/>
                <Chart2 pac={props1}/>
                <Chart3 pac={props1}/>
                <Chart4 pac={props1}/>
                <Chart5 pac={props1}/>
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