import React from 'react';
import "./nav.scss";

export default function nav(props) {
return (<nav><img className="logo" src="/images/Logo.png"></img>
<button onClick={() => {props.setPage("Buildings"); console.log(props.page);}}>Buildings</button>
<button onClick={() => props.setPage("Tenants")}>Tenants</button></nav>);
}