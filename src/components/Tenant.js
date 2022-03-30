import React, { useState } from "react";
import NAV from './tenant_comp/nav';
import Mbuildings from "./tenant_comp/Mbuildings.js";
import Abuildings from "./tenant_comp/Abuildings";
  import Buildings from './manager_comp/Buildings';


export default function Manager(props) {
  console.log(props);
  const [page, setPage] = useState("mBuildings");
  let mBuildings = [];
  let aBuildings = [];
  sort();
  function sort (){
    for (let i = 0; i < props.buildings.length; i++){
      if (props.buildings[i].tenant_id === props.id){
       mBuildings.push(props.buildings[i]);
      }
      else if (props.buildings[i].tenant_id === null){
       aBuildings.push(props.buildings[i]);
      }
    }
  }
  //const [mBuildings, setMBuildings] = useState();
  //const [users, setUsers] = useState(props.state.users);
  console.log(mBuildings);

return (<div>
<NAV page={page} setPage={setPage} name={props.name}/>
{page === "mBuildings" &&<Mbuildings buildings={mBuildings}/>}
{page === "aBuildings" &&<Abuildings buildings={aBuildings}/>}

</div>);
}
//{page === "Buildings" && <Buildings page={page} buildings={props.state.buildings}/>}
//