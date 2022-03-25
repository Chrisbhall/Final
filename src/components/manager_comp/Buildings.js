import React from "react";
import Building from "./Building";


export default function Buildings(props) {
  console.log(props.buildings);
   let map1 = props.buildings.map(b => {
    return <Building id={b.id} address={b.address} lease_expiray={b.lease_expiray} renewal_notice_due={b.renewal_notice_due} photo={b.photo_url} description={b.description}/>
  });

return (
  <section>
    {map1}
  </section>
);
}