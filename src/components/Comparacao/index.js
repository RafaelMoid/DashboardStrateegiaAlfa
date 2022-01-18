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
    const [selectedProject, setSelectedProject] = useState("");
    const [listNomesProjetos, setListNomesProjetos] = useState([]);
    const auth = useContext(AuthContext);

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

    // AQUI É ONDE AO MUDAR OS SELECT É FEITA A REQUISIÇÃO DE API
    //SE FAZ NECESSARIO ADICIONAR ATÉ 5 PROJETOS NO ARRAY DE SELECTED PROJECTS E PARA CARA UM
    //FAZER UMA REQUISIÇÃO DIFERENTE E CRIAR UM NOVO STATE/ARRAY COM TODOS OS RETORNOS
    //PARA DAI COM O RETORNO EXIBIR TUDO NOS CHARTS COMO PROPS
    useEffect(() =>{
        let func = async function() {
            if(selectedProject){
                let projetos = await fetchMapStatisticsComp(selectedProject)
                console.log(projetos)
                // setListNomesProjetos(...[projetos])
            }
        }
        func()
    },[selectedProject])

    // const listaProjetosNome = journeys.map((c)=><li key={c.id} className="ulItem"><p className="ulItem">{c.name}</p></li>)


    const ListaProjetos = () => {
        return (
            journeys.map((c)=><option value={c.id}>{c.title}</option>)
        );
    }
    const ListaProjetosNome = () => {
        return (
            listNomesProjetos?.map((c)=><li key={c.id} className="ulItem"><p className="ulItem">{c.name}</p></li>)
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
                       <select className="dropdown" onChange={ e => setSelectedProject(e.target.value)}> 
                            <option value="default" >Escolha um projeto</option>
                            <ListaProjetos />
                            {/* {listaProjetosDropdown} */}
                        </select>
                     
                        <div className="wrapperProj">
                            <h3>mediana</h3>
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
                             <ChartPAtivas/>
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
                <Chart1/>
                <Chart2/>
                <Chart3/>
                <Chart4/>
                <Chart5/>
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