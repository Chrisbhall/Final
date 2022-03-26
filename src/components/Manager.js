import React, { useState } from "react";
import NAV from './manager_comp/nav';
import Buildings from './manager_comp/Buildings';
import Tenants from './manager_comp/Tenants';

export default function Manager(props) {
  const [page, setPage] = useState("Buildings");
  console.log(props);
return (<div>
<NAV page={page} setPage={setPage}/>
<h1>{page} <button>Create {page}</button></h1>
{page === "Buildings" && <Buildings buildings={props.state.buildings}/>}
{page === "Tenants" && <Tenants tenants={props.state.users}/>}
</div>);
}