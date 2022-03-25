import React, { useState } from "react";
import NAV from './manager_comp/nav';
import Buildings from './manager_comp/Buildings';
import Tenants from './manager_comp/tenant';

export default function Manager() {
  const [page, setPage] = useState("Buildings");
return (<div>
<NAV page={page} setPage={setPage}/>
{page === "Buildings" && <Buildings/>}
{page === "Tenants" && <Tenants/>}
</div>);
}