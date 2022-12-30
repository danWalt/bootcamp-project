import React from 'react';
import mockCampaigns from './campaignsData';
import Table from './Components/CampaignsComponents/Table';
import Filter from './Components/CampaignsComponents/Filtering';

function CampaignsPage() {
  let campaigns = mockCampaigns;
  return (
    <div className="campaigns-container">
      <h1>Campaigns</h1>
      <Filter campaignsObjects={campaigns}/>
      <Table campaignsObjects={campaigns}/>
    </div>
  );
}

export default CampaignsPage;
