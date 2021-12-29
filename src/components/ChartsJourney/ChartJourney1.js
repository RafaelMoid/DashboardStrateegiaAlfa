import React , { useContext, useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import ChartJourHori from './chartJourneyHorizontal';
import "./chartJourneyHorizontal.css";
import Legend from './legendJourney.js';
import ChartLineIndice from './chartLineIndice.js';

import "./ChartJourney1.css";


const Progress = ({ done }) => (
        <div className="progress">
            <div className="progress-done" style={{
                opacity:1,
                width: `${done}%`
            }}>
                <p className="progressTxt">{done}%</p>
            </div>
        </div> 
);

const Progress2 = ({ done }) => (
    <div className="progress">
        <div className="progress-done2" style={{
            opacity:1,
            width: `${done}%`
        }}>
            <p className="progressTxt">{done}%</p>
        </div>
    </div> 
);

const Progress3 = ({ done }) => (
    <div className="progress">
        <div className="progress-done3" style={{
            opacity:1,
            width: `${done}%`
        }}>
            <p className="progressTxt">{done}%</p>
        </div>
    </div> 
);

const Progress4 = ({ done }) => (
    <div className="progress">
        <div className="progress-done4" style={{
            opacity:1,
            width: `${done}%`,
        }}>
            <p className="progressTxt">{done}%</p>
        </div>
    </div> 
);

const ProgressH = ({ done }) => (
    <div className="progressH">
        <div className="progress-doneH" style={{
            opacity:1,
            width: `${done}%`
        }}>
            <p className="progressTxtH">{done}%</p>
        </div>
    </div> 
);

const ProgressH2 = ({ done }) => (
<div className="progressH">
    <div className="progress-doneH2" style={{
        opacity:1,
        width: `${done}%`
    }}>
        <p className="progressTxtH">{done}%</p>
    </div>
</div> 
);

const ProgressH3 = ({ done }) => (
<div className="progressH">
    <div className="progress-doneH3" style={{
        opacity:1,
        width: `${done}%`
    }}>
        <p className="progressTxtH">{done}%</p>
    </div>
</div> 
);

const ProgressH4 = ({ done }) => (
<div className="progressH">
    <div className="progress-doneH4" style={{
        opacity:1,
        width: `${done}%`
    }}>
        <p className="progressTxtH">{done}%</p>
    </div>
    
</div> 
);

const ChartJourney1 = ({props , props2}) => {
   
    return (
        <>
        {/* AQUI EMBAIXO EU TÔ FAZENDO UMA RENDERIZAÇÃO CONSIDIONAL CHECANDO O RETORNO DE PROPS É DIFERENTE
        DE NULO */}
        {props2.users && props.people_active_count && (
        <div className="chartJWrapper">
            <div className="leftData"> 
               <h2>Índices</h2>  
               <div>

                    {/* O CALCULO ABAIXO NÃO ESTÁ FUNCIONANDO
                    ACHE UMA FORMA DE CONTAR O COMPRIMENTO DO ARRAY USERS PARA USAR COMO
                    TOTAL DE USUARIOS, SERÁ NECESSARIO USAR OS USUARIOS DE USERS PARA ITERAR COM
                    A LISTA DE PESSOAS NO PROJETO */}
                   
                   <h3 className="chartJourneyTitle1">Pessoas ativas na jornada </h3>
                   <Progress done={((props.people_active_count / props2?.users.length)*100).toFixed(2)}/>
                   <p className="chartJourneyP1">Total de participantes: {props2?.users.length}</p>
                   <p className="chartJourneyP3">Pessoas inativas: {props2?.users.length - props.people_active_count}</p>
               </div>
               <div>
                   <h3 className="chartJourneyTitle1">Engajamento nas questões</h3>
                   <Progress2 done={
                  parseFloat(
                    props.parent_comments_count
                    /
                    (props.question_count*props.people_active_count)*100)
                    .toFixed(2)}/>

                   <p className="chartJourneyP1">N° de questões: {props.question_count}</p>
                   <p className="chartJourneyP3">N° de respostas: {props.parent_comments_count} de {props.parent_comments_count * props.people_active_count} esperadas</p>
               </div>
               <div>
                   <h3 className="chartJourneyTitle1">Engajamento nos debates</h3>
                   <Progress3 done={parseFloat(
                    (props.agreements_comments_count+props.reply_comments_count)
                    /
                    ((props.parent_comments_count*props.people_active_count)/2)*100).toFixed(2)
                  }/>
                   <p className="chartJourneyP1">N° de comentários: {props.total_comments_count}</p>
                   <p className="chartJourneyP2">N° de concordos: {props.agreements_comments_count}</p>
                   <p className="chartJourneyP3">N° de interações: {(props.agreements_comments_count + props.replied_parent_comments_count) + ' '}
                    de {(props.people_active_count * props.replied_parent_comments_count)/2} esperadas</p>
               </div>
               <div>
                   <h3 className="chartJourneyTitle1">Engajamento nas divergências</h3>
                   <Progress4 done={
                  parseFloat(
                      (props.parent_comments_count
                      /
                      (props.question_count*props.people_active_count))
                    +
                    (((props.agreements_comments_count+props.reply_comments_count)
                    /
                    ((props.parent_comments_count*props.people_active_count)/2))/2)*100).toFixed(2)}/>
               </div>
            </div>
            <div className="rightData">
                <h3 className="chartJourneyTitle1">Balanço índices</h3>
                <div className="chartJourHoriWrapper">
                    <ProgressH done={((props.people_active_count / props2?.users.length)*100).toFixed(2)}/>
                    <ProgressH2 done={
                  parseFloat(
                    props.parent_comments_count
                    /
                    (props.question_count*props.people_active_count)*100)
                    .toFixed(2)}/>
                    <ProgressH3 done={parseFloat(
                    (props.agreements_comments_count+props.reply_comments_count)
                    /
                    ((props.parent_comments_count*props.people_active_count)/2)*100).toFixed(2)
                  }/>
                    <ProgressH4 done={
                  parseFloat(
                      (props.parent_comments_count
                      /
                      (props.question_count*props.people_active_count))
                    +
                    (((props.agreements_comments_count+props.reply_comments_count)
                    /
                    ((props.parent_comments_count*props.people_active_count)/2))/2)*100).toFixed(2)}/>
                </div>
                <Legend />
            </div>
        </div>  
        )} </>    
    )
};

export default ChartJourney1;