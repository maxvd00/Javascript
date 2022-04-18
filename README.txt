Zoals ik Lucas al had verteld was ik niet blij met mijn eindproduct. Ik heb dus besloten om opnieuw te beginnen. Ik heb keihard gewerkt deze afgelopen weken aan deze opdracht. En heb er ook degelijk wel wat van geleerd. Het project is nog niet af. 
Dit ga ik nog wel verder afmaken. Dit is ook de reden waarom ik niet iedere week heb gecommit 

1. ONDERZOEK: 
voor de tutorials heb ik twee video's gebruikt
1: https://www.youtube.com/watch?v=FzWG8jiw4XM&list=PL_A7M6rE0d8R6r0KowXm7D4JUvDBslyle&index=4
2: https://www.youtube.com/watch?v=tsNswx0nRKM&list=PL_A7M6rE0d8R6r0KowXm7D4JUvDBslyle&index=5

ik heb deze video's gebruikt omdat dit de gehele netflix clone is met ook een CRUD systeem en een heel admin systeem, Het is ook vrijwel helemaal veilig, ook met gedachte dat ik hier heel veel van zal leren. 

2. ONDERZOEK 2.0;
in mijn presentatie kon ik geen Class components en Functional components laten zien dat kan ik nu wel 

Class component:
Een class component is bijna identiek aan een funtional component echter moet hier eerst render() staan voordat hij werkt, vroeger was het ook alleen mogelijk om een class component te gebruiken omdat funtional components niet waren ondersteund met States


Functional component: 
Een functional component is een eigenlijk gewoon een functie die je aanmaakt en iets returned zie ../components/List.jsx en de Funtion List. Ik heb eigenlijk alleen maar funtional components gebruikt omdat dit een stuk minder code is en overzichtelijker.

Zie het verschil in bla.jsx


Prop: 
Prop is een variable die je aanmaakt bij bijvoorbeeld een functie zie app.jsx in NETFLIX_CLONE. Met een prop kan je deze heel makkelijk importeren en exporteren naar een andere file.
bijvoorbeeld heb ik Const "Home" en kan ik deze ophalen in mijn geval in App.jsx door de volgende functie te gebruiken:
import Home from "./pages/home/Home";
hiermee haal je dus die bepaalde Const op ("Home"); en deze weergeven op de pagina van App.jsx 

State: 
Een state maakt makkelijker om een variable op te roepen. Door in een functie een state te gebruiken kan je deze heel makkelijk weer opvragen in iets anders. Zie List.jsx waar ik een state heb toegevoegd aan isMoved en slidenumber. Hier heb ik een standaard waarde aangegeven en deze opgeroepen in de functie daaronder en aangepast in dit geval aangepast van (false) naar (true) van de eerste if statement.

API: 
Ik heb mijn API niet werkend gekregen maar dit ga ik nog wel doen. 

Zie List.jsx

TESTEN: 
opgegeven moment zat ik mijn API te testen, deze werkte niet meer. Zodra ik een verzoek voor een user aanmaken deed in Postman kreeg in een foutmelding dat username en password en email required waren. 
Ik dacht eerst dat het lag aan mijn mongoDB dit was niet het geval. Op gegeven moment heb ik met console log beter de fout kunnen achterhalen. deze zat in API auth.js 
. Ik vroeg hier de req.body.username op en bleek dat er helemaal niets in body zat. Body bleek deprecated te zijn. Hij vroeg body weer wel op nadat ik "express" had geimporteerd. 

TESTEN feedback:
Ik heb feedback gevraagd aan bram, die zei dat ik eerst naar de login moest komen, ook dat ik de pagina moest opvullen met andere films. 
Ook heb 

HELPEN: 
Ik heb bram geholpen met zijn Netflix hij kwam er niet uit met de navbar en heb hem hiermee geholpen 
Constantijn die zei dat ik mijn express beter moest importeren anders connecte mijn MongoDB niet goed en zou ik tegen foutmeldingen aankomen 

Eigen initiatief: 
Een console.log dat laat zien in de terminal als de app wordt gestart dat er connectie wordt gemaakt met de database en dat de server start, ook een extra list toegevoegd an


Wat heb ik geleerd? 

- Ik heb geleerd hoe postman kan gebruiken en waarvoor het dient.
- Ook ben ik erachter gekomen hoeveel dingen je kan met React en Javascript, je kan echt bijna letterlijk alles maken.
- Wat een state en props zijn.
