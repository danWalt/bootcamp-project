import React from "react";

export default function Campaign(props) {
  return(
    <tbody>
  <tr className="row-tr">
        {/* <div className="id-div"> */}
          <td className="id">{props.id}</td>
        {/* </div> */}
        {/* <div className="campaign-div"> */}
          <td className="campaign--name">{props.name}</td>
          <td className="package--name">{props.package}</td>
        {/* </div> */}
        {/* <div className="bid-div"> */}
          <td className="bid--value">{props.bid}</td>
          <td className="cost--model">{props.cost_model}</td>
        {/* </div> */}
        {/* <div className="geos-div"> */}
          <td className="geos--value">{props.geos}</td>
        {/* </div> */}
        {/* <div className="placements-div"> */}
          <td className="placements--list">{props.placements}</td>
        {/* </div> */}
        {/* <div className="advertiser-div"> */}
          <td className="advertiser--value">{props.advertiser}</td>
          <td className="am--value">{props.account_manager}</td>
        {/* </div> */}
        </tr>
        </tbody>
);
}