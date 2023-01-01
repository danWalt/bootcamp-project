import React from 'react';
import mockCampaigns from './campaignsData';
import Table from './Components/CampaignsComponents/Table';
import Filter from './Components/CampaignsComponents/Filtering';

class CampaignsPage extends React.Component {

  constructor(props){
    super(props)
    this.campaigns = mockCampaigns
  }

  render(){
  return (
    <div className="campaigns-container">
      <h1>Campaigns</h1>
      <Filter campaignsObjects={this.campaigns}/>
      <Table campaignsObjects={this.campaigns}/>
    </div>
  );
}
}

export default CampaignsPage;
