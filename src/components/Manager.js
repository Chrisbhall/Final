import React, { useState } from "react";
import NAV from './manager_comp/nav';
import Buildings from './manager_comp/Buildings';
import Tenants from './manager_comp/Tenants';

export default function Manager(props) {
  const [page, setPage] = useState("Buildings");
  const [users, setUsers] = useState(props.state.users);
  console.log(users);
  function saveTenant(id) {

    //props.setState({...props.state, appointments});
  }
return (<div>
<NAV page={page} setPage={setPage}/>
<h1>{page}</h1>
{page === "Buildings" && <Buildings buildings={props.state.buildings}/>}
{page === "Tenants" && <Tenants tenants={users} state={props.state} setUsers={setUsers}/>}
</div>);
}