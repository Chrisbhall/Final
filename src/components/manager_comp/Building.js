import React from "react";
import "./building.scss";


export default function Building(props) {
 // console.log(props);
return (
  <article className="building">
    <h2>{props.address}</h2>
    <img className="article_image" src={props.photo}/>
    <p>{props.description}</p>
  </article>
);
}