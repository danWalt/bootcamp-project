import React from 'react';
import Campaign from './Campaign';

class Table extends React.Component {

  constructor(props){
    super(props);
    this.campaigns = props.campaignsObjects.map((campaign) => <Campaign key={campaign.id} {...campaign} />);
  }

  render(){
  return (
    <table className="table-div">
      <thead>
        <tr>
          <th>ID</th>
          <th>CAMPAIGN</th>
          <th>PACKAGE</th>
          <th>BID</th>
          <th>COST MODEL</th>
          <th>GEOS</th>
          <th>PLACEMENTS</th>
          <th>ADVERTISER</th>
          <th>ACCOUNT MANAGER</th>
        </tr>
      </thead>
      {this.campaigns}
    </table>
  );
}

export default Table

