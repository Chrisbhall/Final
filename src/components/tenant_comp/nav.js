import React from 'react';
import "./nav.scss";


export default function nav(props) {

return (<nav><div className='left_nav'><img className="logo" src="/images/Logo.png"></img>
<button className='nav_button' onClick={() => {props.setPage("mBuildings");}}>My Buildings</button>
<button className='nav_button' onClick={() => {props.setPage("aBuildings")}}>Available Buildings</button></div>
<div className='right_nav'><button className='nav_button'>  Logout {props.name} </button></div></nav>);
}