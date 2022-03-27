import React from "react";

export default function Status(props) {
/*
manages the messages when appointment is saving or deleting
*/
    return (
<main className="status__card status__card--status">
  <img
    className="status__status-image"
    src="images/status.png"
    alt="Loading"
  />
  <h1 className="text--semi-bold">{props.message}</h1>
</main>

  );
}