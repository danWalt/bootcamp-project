import React from "react";
import Campaign from "./Campaign";
import mockCampaigns from "../../campaigns.js";

export default function Table() {
    const campaigns = mockCampaigns.map((item) => {
        return <Campaign key={item.id} {...item} />;
      })
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
        {campaigns}
        </table>
        );
  }