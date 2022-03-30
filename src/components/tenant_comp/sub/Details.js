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
  const google_map_address= props.address.split(' ').join('%');
  const [id, setId] = useState(props.id||"");
  const [tenant, setTenant] = useState(props.tenant||"");
  const [address, setAddress] = useState(props.address||"");
  const [lease_expiray, setLease_expiray] = useState(exp);
  const [renewal_notice_due, setRenewal_notice_due] = useState(renewal);
  const [description, setDescription] = useState(props.description||"");
  const [photo, setPhoto] = useState(props.photo||"");
  const [error, setError] = useState("");
  console.log(props);

return (
<div>
<h2>{address}</h2>
<p>Lease Expires: {lease_expiray}</p>
<p>Renewal Notice Due: {renewal_notice_due}</p>
<p>Tenant ID: {tenant || "No one is leasing this yet"}</p>
<img src={photo}/>
<p>{description}</p>
<div className="mapouter"><div className="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src={"https://maps.google.com/maps?q="+google_map_address+"&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
</div>
);
}
