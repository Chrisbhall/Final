import React, { useState } from "react";
import './login.scss';


export default function Manager(props) {

return (<div className="login">
  <video autoPlay muted loop id="background_video">
  <source src="/videos/background.mp4" type="video/mp4"/>
</video>
<form id="login">
  <label htmlFor="email">Email Address: </label><br/>
  <input type="text" name="email" placeholder="example@address.com"/><br/>
  <label htmlFor="password">Password: </label><br/>
  <input type="password" name="password" placeholder="password"/><br/>
  <button>Login</button> 
</form>
</div>);
}