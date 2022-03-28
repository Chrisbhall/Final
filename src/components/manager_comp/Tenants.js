import React, { useState } from "react";
import Tenant from "./Tenant";
import useVisualMode from "../../hooks/useVisualMode";
import Form from "./sub/TForm";
import Confirm from "./sub/Confirm";
import Status from "./sub/Status";


export default function Tenants(props) {
  console.log(props);
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
  const [tenant, setTenant] = useState({
    id: "",
    name: "",
    email: "",
    password:"",
    phone: ""
  });
  function onSave(id,name,phone,email) {
    transition(SAVE, true);
    if (id === ""){
    id = props.tenants.length+1;
    const user = props.tenants[props.tenants.length] = {id: id, name: name,phone: phone,email: email}} else if (id !== ""){
    props.tenants[id - 1] = {id: id, name: name,phone: phone,email: email}
    }
    
    //id = {name: name,phone: phone,email: email}
    //props.setUsers({...props.tenants, user});}
    //props.setState(...props.tenants, props.state.users[id])
    /*  props.bookInterview(props.id,interview).then(() => transition(SHOW, true)).catch(() => transition(ERROR_SAVE, true));*/
    console.log(props.tenants);
  }

  function onDelete(id){
    id -= 1;
    setDeleteId(id);
    setTenant({name: props.tenants[id].name, email: props.tenants[id].email, phone: props.tenants[id].phone});
    transition(CONFIRM);
  }
  function onEdit(id){
    id -=1;
    setTenant({id: props.tenants[id].id, name: props.tenants[id].name, email: props.tenants[id].email, password: props.tenants[id].password, phone: props.tenants[id].phone});
    console.log(tenant);
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
  console.log(props);
  let map1 = props.tenants.map(b => {
    return <Tenant key={b.id} id={b.id} email={b.email} name={b.name} phone={b.phone} manager={b.manager} onEdit={onEdit} onDelete={onDelete}/>
  });
return (
<section>
  <h2><button onClick={() => onCreate()}>Create Tenant!</button></h2>
  {mode === SHOW && map1}
  {mode === CREATE && <Form onCancel={onCancel} onSave={onSave}/>}
  {mode === EDIT && <Form id={tenant.id} name={tenant.name} email={tenant.email} password={tenant.password} phone={tenant.phone} onCancel={onCancel} onSave={onSave}/>}
  {mode === CONFIRM && <Confirm name={tenant.name} onConfirm={onConfirm} onCancel={onCancel}/>}
  {mode === DELETE && <Status message="Deleting..." />}
  {mode === SAVE && <Status message="Saving..." />}
</section>
);
}