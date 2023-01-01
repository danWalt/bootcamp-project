import React from 'react';

class Campaign extends React.Component {
  
  constructor(props){
    super(props);
    this.campaign = props
  }

  render(){
  return (
    <tbody>
      <tr className="row-tr">
        {/* <div className="id-div"> */}
        <td className="id">{this.campaign.id}</td>
        {/* </div> */}
        {/* <div className="campaign-div"> */}
        <td className="campaign--name">{this.campaign.name}</td>
        <td className="package--name">{this.campaign.package}</td>
        {/* </div> */}
        {/* <div className="bid-div"> */}
        <td className="bid--value">{this.campaign.bid}</td>
        <td className="cost--model">{this.campaign.cost_model}</td>
        {/* </div> */}
        {/* <div className="geos-div"> */}
        <td className="geos--value">{this.campaign.geos}</td>
        {/* </div> */}
        {/* <div className="placements-div"> */}
        <td className="placements--list">{this.campaign.placements}</td>
        {/* </div> */}
        {/* <div className="advertiser-div"> */}
        <td className="advertiser--value">{this.campaign.advertiser}</td>
        <td className="am--value">{this.campaign.account_manager}</td>
        {/* </div> */}
      </tr>
    </tbody>
  );
}
}

export default Campaign;

