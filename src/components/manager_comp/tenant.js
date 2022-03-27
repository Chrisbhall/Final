import React, { useState } from "react";
import "./tenant.scss";


export default function Tenant(props) {
  console.log(props);
if (props.manager === true){
  return (null);
}else{
return (
<article className="tenant">
 <h2>{props.name}</h2>
 <p>{props.email}</p>
 <p>{props.phone}</p>
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
</article>
);
}
}