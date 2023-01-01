import React from 'react';

export default function Filter(props) {
    const campaigns = props.campaignsObjects
    return (
        <div className='filter--div'>
            <h2>Filter</h2>
            <h3>campaign name</h3>    
            <h3>package</h3>
            <h3>Cost Model</h3>
            <h3>GEOS</h3>
            <h3>Placements</h3>
            <h3>Advertiser</h3>
            <h3>Account Manager</h3>
        </div>
        
    )
}
