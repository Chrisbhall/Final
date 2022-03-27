import React, { useState } from "react";



export default function TForm(props) {
  /*const [info, setInfo] = useState({id: props.id, name: props.name, email:props.email, phone:props.phone}|| {id: "", name: "", email:"", phone:""});*/
  const [id, setId] = useState(props.id||"");
  const [name, setName] = useState(props.name||"");
  const [email, setEmail] = useState(props.email||"");
  const [phone, setPhone] = useState(props.phone||"");
  const [error, setError] = useState("");
  console.log(props);
  function validate(){
    if (name === ""){
      setError("Tenant name cannot be blank");
    return;
    } else if (email === ""){
      setError("Tenant email cannot be blank");
    }else if (phone === ""){
      setError("Tenant phone cannot be blank");
    }
    setError("");
  props.onSave(id, name, phone, email);
  }
return (
  <form autoComplete="off" onSubmit={event => event.preventDefault()}>
    <section className="validation">{error}</section>
    <label htmlFor="name">Name:</label><br/>
    <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)}/><br/>
    <label htmlFor="name">Email:</label><br/>
    <input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/><br/>
    <label htmlFor="name">Phone:</label><br/>
    <input type="text" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)}/><br/>
    <button onClick={() => validate()}>Save</button>
    <button onClick={() => props.onCancel()}>Cancel</button>
  </form>
);
}
