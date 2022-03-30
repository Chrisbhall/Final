import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Manager from './components/Manager';
import Login from "./components/Login";
import axios from "axios";
import useApplicationData from "./hooks/useApplicationData";

function App() {
  const [state, setState] = useState({
    users:[{
      "id": 1,
      "name": "Alice Boa",
      "phone": "9053341213",
      "password": "Jungle",
      "email": "al@hotmail.com",
      "manager": true
  },{
    "id": 2,
    "name": "Kira Karma",
    "phone": "5191239875",
    "password": "Billy",
    "email": "kirak@gmail.com",
    "manager": false
},
{
  "id": 3,
  "name": "Chris Hall",
  "phone": "5192345165",
  "password": "Manager",
  "email": "chris@hotmail.ca",
  "manager": false
}
],
    buildings:[{
      "id": 1,
      "tenant_id": 2,
      "address": "114 thomas street, oakville",
      "lease_expiray": "2023-09-23T04:00:00.000Z",
      "renewal_notice_due": "2023-08-23T04:00:00.000Z",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit lectus, tincidunt vitae cursus eu, dapibus non libero. Phasellus vitae consequat ipsum.",
      "photo_url": "/images/01.png"
  },
  {
    "id": 2,
    "tenant_id": 2,
    "address": "107 dunn street, oakville",
    "lease_expiray": "2022-05-05T04:00:00.000Z",
    "renewal_notice_due": "2022-04-05T04:00:00.000Z",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit lectus, tincidunt vitae cursus eu, dapibus non libero. Phasellus vitae consequat ipsum.",
    "photo_url": "/images/02.png"
},
{
  "id": 3,
  "tenant_id": null,
  "address": "229 lakeshore, oakville",
  "lease_expiray": "2025-12-12T05:00:00.000Z",
  "renewal_notice_due": "2025-11-12T05:00:00.000Z",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit lectus, tincidunt vitae cursus eu, dapibus non libero. Phasellus vitae consequat ipsum.",
  "photo_url": "/images/03.png"
},
{
  "id": 4,
  "tenant_id": 3,
  "address": "76 main street, george town",
  "lease_expiray": "2024-08-28T04:00:00.000Z",
  "renewal_notice_due": "2024-07-28T04:00:00.000Z",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit lectus, tincidunt vitae cursus eu, dapibus non libero. Phasellus vitae consequat ipsum.",
  "photo_url": "/images/04.png"
},
{
  "id": 5,
  "tenant_id": 3,
  "address": "315 queen street halton hills",
  "lease_expiray": "2023-09-23T04:00:00.000Z",
  "renewal_notice_due": "2023-08-23T04:00:00.000Z",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit lectus, tincidunt vitae cursus eu, dapibus non libero. Phasellus vitae consequat ipsum.",
  "photo_url": "/images/05.png"
}]
  });

  /*useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/users'),
      axios.get('http://localhost:8001/api/buildings')
    ]).then((all) => {
      setState(prev => ({...prev, users: all[0].data, buildings: all[1].data}));
      
    });
},[])*/
return (<Login/>);

}
//<Manager state={state} setState={setState}></Manager>
export default App;
