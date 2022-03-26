import React, { useState } from "react";
import Tenant from "./Tenant";
import useVisualMode from "../../hooks/useVisualMode";


export default function Tenants(props) {
  const SHOW = "SHOW";
  const EMPTY = "EMPTY";
  const CREATE = "CREATE";
  const SAVE = "SAVE";
  const DELETE = "DELETE";
  const CONFIRM = "CONFIRM";
  const Edit = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  console.log(props);
  let map1 = props.tenants.map(b => {
    return <Tenant key={b.id} email={b.email} name={b.name} phone={b.phone} manager={b.manager}/>
  });
return (
<section>
  {map1}
</section>
);
}