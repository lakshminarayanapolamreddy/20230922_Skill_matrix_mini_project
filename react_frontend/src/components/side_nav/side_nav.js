import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import { json, useNavigate } from 'react-router-dom';
import './side_nav.css';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

function LearningAndDev() {
const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogout=()=>{
  
    cookies.remove('role')
    cookies.remove('Email')
    cookies.remove('token')
    navigate('/')

    

  }
  return (
    <div>
      <div className="container">
        <div className="sidenav">
          <div className="logo">
          </div>
          <div className="Dashboard">
            {/* <Link to='#' className='linkstonavigate'></Link> */}
            <br/><br/>
            <Link to='/Profile' className='linkstonavigate'>Profile</Link>
            <Link to='#' className='linkstonavigate'>Dashboard</Link>
            <Link to='#' className='linkstonavigate'>Timesheet</Link>
            <Link to='#' className='linkstonavigate'>Projects</Link>
            <Link to='#' className='linkstonavigate'>Leave</Link>
            <Link to='#' className='linkstonavigate'>Work From Home</Link>
            <Link to="#" className='linkstonavigate'>Approvals</Link>
            <Link to='#' className='linkstonavigate'>Survey</Link>
            <Link to='#' className='linkstonavigate'>Service Desk</Link>
            <Link to="#" className='linkstonavigate'>Forms</Link>
            <Link to="#" className='linkstonavigate'>Travel</Link>
            <Link to='#' className='linkstonavigate'>Expenses</Link>
            <Link to='#' className='linkstonavigate'>Settings</Link>
            <Link to='#' className='linkstonavigate'>Control Panel</Link>
            <Link to='#' className='linkstonavigate'>Resourcing</Link>
            <Link to='#' className='linkstonavigate'>Access Control</Link>
            <Link to='/adminTrainingTable' className='linkstonavigate'>L&D</Link>
            <button className='linkstonavigate' onClick={handleLogout} >Logout&nbsp;<LogoutIcon/></button>

            {/* <a href="/"><button type="button" id = "logoutbtn"class="btn btn-danger">Logout</button></a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningAndDev;

