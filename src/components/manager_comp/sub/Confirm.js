import React, { useState } from "react";



export default function Confirm(props) {
  console.log(props);
return (
  <main className="appointment__card appointment__card--confirm">
  <h1 className="text--semi-bold">Are you sure you want to delete {props.name}</h1>
  <section>
    <button onClick={() => props.onConfirm()}>Confirm</button>
    <button onClick={() => props.onCancel()}>Cancel</button>
  </section>
</main>
);
}
