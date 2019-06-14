import React from 'react';
//import App from './App.css';
import {Link} from 'react-router-dom'



function AllStudents() {
  return (
    <div >
      <h1>All Students</h1>
      <button class="btn btn-outline-success" type="button"><Link  to='/StudentsForm'>Add Student</Link></button>
    </div>
  );
}

export default AllStudents;