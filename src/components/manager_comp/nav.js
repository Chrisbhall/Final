import React from 'react';
import "./nav.scss";


export default function nav(props) {

return (<nav><div className='left_nav'><img className="logo" src="/images/Logo.png"></img>
<button className='nav_button' onClick={() => {props.setPage("Buildings");}}>Buildings</button>
<button className='nav_button' onClick={() => {props.setPage("Tenants")}}>Tenants</button></div>
<div className='right_nav'><button className='nav_button'> Logout </button></div></nav>);
}