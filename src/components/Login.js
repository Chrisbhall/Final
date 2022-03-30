import React, { useState } from "react";
import './login.scss';


export default function Manager(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
return (<div className="login">
  <video autoPlay muted loop id="background_video">
  <source src="/videos/background.mp4" type="video/mp4"/>
</video>
<form id="login" onSubmit={event => event.preventDefault()}>
  <label htmlFor="email">Email Address: </label><br/>
  <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="example@address.com" required/><br/>
  <label htmlFor="password">Password: </label><br/>
  <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="password" required/><br/>
  <input type="submit" onClick={() => props.login(email, password)} value="Login" />
</form>
</div>);
}