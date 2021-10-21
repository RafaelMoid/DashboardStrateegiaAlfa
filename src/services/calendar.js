function Gapi(){
    var gapi = window.gapi
    var CLIENT_ID = "";
    var API_KEY = "";
    var DISCOVERY_DOCS = "";
    var SCOPES = "";


    const handleClick = () => {
        gapi.load('client:auth2', () =>{
            console.log('Client loaded')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('BAM!'))

            gapi.auth2.getAuthInstance().signIn()
        })
    }
}

export default Gapi;