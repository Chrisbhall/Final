import React, { useState }  from "react";
import Building from "./Building";
import useVisualMode from "../../hooks/useVisualMode";
import "./buildings.scss";

import Form from "./sub/BForm";
import Confirm from "./sub/Confirm";
import Status from "./sub/Status";


export default function Buildings(props) {
  console.log(props.buildings);
  const SHOW = "SHOW";
  const EMPTY = "EMPTY";
  const CREATE = "CREATE";
  const SAVE = "SAVE";
  const DELETE = "DELETE";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const [deleteId, setDeleteId] = useState();
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

  function onSave(id,name,phone,email) {
    /*transition(SAVE, true);
    if (id === ""){
    id = props.tenants.length+1;
    const user = props.tenants[props.tenants.length] = {id: id, name: name,phone: phone,email: email}} else if (id !== ""){
    props.tenants[id - 1] = {id: id, name: name,phone: phone,email: email}
    }
    
    *///id = {name: name,phone: phone,email: email}
    //props.setUsers({...props.tenants, user});}
    //props.setState(...props.tenants, props.state.users[id])
    /*  props.bookInterview(props.id,interview).then(() => transition(SHOW, true)).catch(() => transition(ERROR_SAVE, true));*/
    //console.log(props.tenants);
    transition(SHOW);
  }

  function onDelete(id){
   /* id -= 1;
    setDeleteId(id);
    setTenant({name: props.tenants[id].name, email: props.tenants[id].email, phone: props.tenants[id].phone});
    transition(CONFIRM);*/
  }
  function onEdit(id){
    id -=1;
    setBuilding({id: props.buildings[id].id, address: props.buildings[id].address, tenant: props.buildings[id].tenant_id,lease_expiray: props.buildings[id].lease_expiray, renewal_notice_due: props.buildings[id].renewal_notice_due, description: props.buildings[id].description, photo:props.buildings[id].photo});
    /*set({id: props.tenants[id].id, name: props.tenants[id].name, email: props.tenants[id].email, password: props.tenants[id].password, phone: props.tenants[id].phone});
    console.log(tenant);*/
    transition(EDIT);
  }
  function onCreate(){
    transition(CREATE);
    
  }
  function onCancel(){
    back();
  }
  function onConfirm(){

    transition(DELETE, true);

    /*props.cancelInterview(deleteId).then(() => transition(EMPTY, true)).catch(() => transition(ERROR_DELETE, true));*/
  }

   let map1 = props.buildings.map(b => {
    return <Building key={b.id} id={b.id} address={b.address} lease_expiray={b.lease_expiray} renewal_notice_due={b.renewal_notice_due} photo={b.photo_url} description={b.description} onEdit={onEdit} onDelete={onDelete}/>
  });

return (
  <section>
    <div className="title"><h1>{props.page}</h1><button onClick={() => onCreate()}>Create Building!</button></div>
    {mode === SHOW && map1}
    {mode === CREATE && <Form onCancel={onCancel} onSave={onSave}/>}
    {mode === EDIT && <Form id={building.id} address={building.address} tenant={building.tenant} lease_expiray={building.lease_expiray} renewal_notice_due={building.renewal_notice_due} description={building.description} photo={building.photo} onCancel={onCancel} onSave={onSave}/>}
  </section>
);
}