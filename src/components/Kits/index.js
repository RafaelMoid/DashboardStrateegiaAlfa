import React,{ useContext, useState } from "react";
import { AuthContext } from "../providers/auth";
import { useHistory } from "react-router";
import {EncontrosData} from './EncontrosData.js';
import {Link} from "react-router-dom";
import "./encontros.css";


const Encontros = ({ username }) => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [encontros,setEncontros] = useState(false);

  //Google Calendar variables
  var gapi = window.gapi;
  var CLIENT_ID = "207024536115-rks4d3inm4brold6q3gba4feqf8jfjfe.apps.googleusercontent.com";
  var API_KEY = "AIzaSyBRbKpQQ0fFyvy1iuLVOP29mCchyq4r6dg";
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const calendarEvent = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client');

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('Bam!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        var event = {
          'summary': 'Daily com time de dev',
          'location': 'https://meet.google.com/nrj-cawc-fdj',
          'description': 'Sprint final.',
          'start': {
            'dateTime': '2021-12-20T09:00:00-07:00',
            'timeZone': 'America/Recife'
          },
          'end': {
            'dateTime': '2021-12-20T10:00:00-07:00',
            'timeZone': 'America/Recife'
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            {'email': 'lpage@example.com'},
            {'email': 'sbrin@example.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        };
       var request = gapi.client.calendar.events.insert({
         'calendarId': 'primary',
         'resource' : event,
       })
       request.execute(event => {
         window.open(event.htmlLink)
       })
      })
    })
  }

  const showEncontros = () => setEncontros(!encontros);
  if ( showEncontros === false) {
    const btnIcon = "FaChevronRight";
  } else {
    const btnIcon = "FaChevronDown";
  };




  return (
    <>
      <div className="wrapper">
        <Link to="#" className='button-menu-bars'>
        <button onClick={showEncontros} className={encontros? 'buttonTogle active' : 'buttonTogle'}>Criando meu canal de comunicação</button>
        </Link>
        </div>
       
      
      <nav className={encontros ? 'button-menu active' : 'button-menu'}>
          <ul className='button-menu-items' onClick={showEncontros}>
              
              
              {EncontrosData.map((item, index) =>{
                  return(
                      <li key={index} className={item.cName}>
                          <div className="kitHexagon">
                           <img className="hexaImg" alt="A Black Hexagon" onClick={calendarEvent} src="hexagon.png"/>
                           <div className="textStyle">
                             <span onClick={calendarEvent} className={item.cName}>{item.dia}</span>
                             <span onClick={calendarEvent} className={item.cName} > {item.hour} </span>
                           </div>
                          </div>
                      </li>
                  )
              })}
            
              
          </ul>
      </nav>
    </>
  );
};

export default Encontros;