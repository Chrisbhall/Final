import React, { useState }  from "react";
import Building from "./Building";
import useVisualMode from "../../hooks/useVisualMode";
import "./buildings.scss";
import Details from "./sub/Details"



export default function Buildings(props) {
  console.log(props.buildings);
  const SHOW = "SHOW";
  const EMPTY = "EMPTY";
  const DETAILS = "DETAILS";
  const EDIT = "EDIT";
  const { mode, transition, back } = useVisualMode(
    SHOW
  );
  const [building, setBuilding] = useState({
    id: "",
    address: "",
    tenant: "",
    lease_expiray:"",
    renewal_notice_due: "",
    description:"",
    photo:""
  });


  function onDetails(id){
    setBuilding({id: props.buildings[id].id, address: props.buildings[id].address, tenant: props.buildings[id].tenant_id,lease_expiray: props.buildings[id].lease_expiray, renewal_notice_due: props.buildings[id].renewal_notice_due, description: props.buildings[id].description, photo:props.buildings[id].photo_url});
    transition(DETAILS);
  }
  function onCancel(){
    back();
  }

   let map1 = props.buildings.map((b, x) => {
    return <Building key={b.id} id={x} address={b.address} lease_expiray={b.lease_expiray} renewal_notice_due={b.renewal_notice_due} photo={b.photo_url} description={b.description} onDetails={onDetails}/>
  });

return (
  <section>
    <div className="title"><h1>My Buildings</h1></div>
    {mode === SHOW && map1}
    {mode === DETAILS && <Details id={building.id} address={building.address} tenant={building.tenant} lease_expiray={building.lease_expiray} renewal_notice_due={building.renewal_notice_due} description={building.description} photo={building.photo}/>}
  </section>
);
}