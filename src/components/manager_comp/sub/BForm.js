import React, { useState } from "react";



export default function BForm(props) {
  /*const [info, setInfo] = useState({id: props.id, name: props.name, email:props.email, phone:props.phone}|| {id: "", name: "", email:"", phone:""});*/
  let exp = "";
  let renewal = "";
  if (props.lease_expiray !== undefined){
  exp = props.lease_expiray.substring(0, 10);
  }
  if (props.renewal_notice_due !== undefined){
  renewal = props.renewal_notice_due.substring(0, 10);
  }
  const [id, setId] = useState(props.id||"");
  const [tenant, setTenant] = useState(props.tenant||"");
  const [address, setAddress] = useState(props.address||"");
  const [lease_expiray, setLease_expiray] = useState(exp);
  const [renewal_notice_due, setRenewal_notice_due] = useState(renewal);
  const [description, setDescription] = useState(props.description||"");
  const [photo, setPhoto] = useState(props.photo||"");
  const [error, setError] = useState("");
  console.log(props);
  function validate(){
    if (address === ""){
      setError("address name cannot be blank");
    return;
    } else if (photo === ""){
      setError("photo cannot be blank");
    }
    setError("");
  props.onSave(id, address, tenant, lease_expiray, renewal_notice_due, description, photo);
  }
return (
  <form autoComplete="off" onSubmit={event => event.preventDefault()}>
    <section className="validation">{error}</section>
    <label htmlFor="address">Address:</label><br/>
    <input type="text" name="address" value={address} placeholder="123 streetname, Province" required onChange={(event) => setAddress(event.target.value)}/><br/>
    <label htmlFor="tenant">Tenant ID:</label><br />
    <input type="number" name="tenant" value={tenant} placeholder="1" onChange={(event) => setTenant(event.target.value)}/><br/>
    <label htmlFor="lease_expiray">Lease Expiray</label><br/>
    <input type="date" name="lease_expiray" value={lease_expiray}  onChange={(event) => setLease_expiray(event.target.value)}/><br/>
    <label htmlFor="renewal_notice_due">Renewal Notice Due:</label><br/>
    <input type="date" name="renewal_notice_due" value={renewal_notice_due} onChange={(event) => setRenewal_notice_due(event.target.value)}/><br/>
    <label htmlFor="description">Description:</label><br/>
    <input type="text" name="description" placeholder="description" onChange={(event) => setDescription(event.target.value)}/><br/>
    <label htmlFor="photo">Photo:</label><br/>
    <input type="file" name="photo" onChange={(event) => setPhoto(event.target.value)}/><br/>
    <button onClick={() => validate()}>Save</button>
    <button onClick={() => props.onCancel()}>Cancel</button>
  </form>
);
}
