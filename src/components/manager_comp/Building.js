import React from "react";
import "./building.scss";


export default function Building(props) {
 // console.log(props);
return (
  <article className="building"  onClick={() => props.onDetails(props.id)}>
    <h2>{props.address}</h2>
    <div className="buttons"><img
 className="button_image_edit"
            src="images/edit.png"
            alt="Edit"
            onClick={() => props.onEdit(props.id)}
          /></div><div className="buttons"><img
          className="button_image_danger"
          src="images/trash.png"
          alt="Delete"
          onClick={() => props.onDelete(props.id)}
        /></div>
    <img className="article_image" src={props.photo}/>
    <p>{props.description}</p>
  </article>
);
}