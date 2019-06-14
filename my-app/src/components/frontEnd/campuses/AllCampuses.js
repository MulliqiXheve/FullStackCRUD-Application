import React from 'react';
//import App from'./App.css';
import {Link} from 'react-router-dom'



function AllCampuses() {
  return (
    <div >
        <h1>All Campuses</h1>
      <button class="btn btn-outline-success" type="button"><Link  to='/CampusesForm'>Add Campus</Link></button>
      
    </div>
  );
}

export default AllCampuses;