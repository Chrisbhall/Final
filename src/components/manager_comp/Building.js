import React from "react";


export default function Building(props) {
  console.log(props);
return (
  <article>
    <h2>{props.address}</h2>
    <img src={props.photo}/>
    <p>{props.description}</p>
  </article>
);
}