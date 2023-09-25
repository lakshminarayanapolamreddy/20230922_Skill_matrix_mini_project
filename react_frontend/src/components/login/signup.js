//react_frontend\src\components\login\signup.js
import { toast } from 'react-toastify';
import LoginService from "../../services/LoginService";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate();
  const [state, setState] = useState({});
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    let data= LoginService.saveDetails(state).then((d)=>{
      if (d.data.message==="User added"){
        toast.success(d.data.message);
        navigate('/signin')
        setState({ 
        name: "", 
        empid:"",
        email: "",
        password: "", 
        designation: "", 
        mobile: "", 
        address:"", 
        blood_group:"", 
      });
      }else if (d.data.message==="Password must have a capital letter a small letter and a number and include any special character"){
        toast.warning(d.data.message);
      }else if (d.data.message=== "In email domain name should contain jmangroup and only small letters"){
        toast.error(d.data.message);
      }else if (d.data.message=== "User already exists!"){
        toast.error(d.data.message);
      } else if (d.data.message=== "All fields are mandatory ; Please fill it."){
        toast.warning(d.data.message);
      }
    })
    .catch(err=>{
      toast.error("Email And Password is not matching")
    })
  };

  return (
    <div className="Sign-up">
      <form onSubmit={handleOnSubmit}>
        <h1 className="title">Create Account</h1>
        <div className='name'>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            className="name-input-feild"
            placeholder='Fullname*'
          />
        </div>

        <div className='empid'>
          <input
            type="text"
            name="empid"
            value={state.empid}
            onChange={handleChange}
            placeholder="Employee Id*"
            className="emp-input-feild"
          />
        </div>

        <div className='email'>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email*"
            className="email-input-feild"
          />
        </div>

        <div className='password'>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Create Password*"
            className="password-input-feild"
          />
        </div>

        <div className='designation'>
          <input 
            type='text' 
            name='designation'
            value={state.designation}
            onChange={handleChange}
            placeholder='Designation*' 
            className='designation-input-feild'
          />
        </div>

        <div className='mobile'>
          <input
            type='text'
            name='mobile'
            value={state.mobile}
            placeholder='Mobile*'
            className='mobile-input-feild'
            onChange={handleChange}
          />
        </div>

        <div className='bldgrp'>
          <input
            type="text"
            name="blood_group"
            value={state.blood_group}
            onChange={handleChange}
            placeholder="Blood Group*"
            className="bld-grp-input-feild"
          />
        </div>

        <div className='address'>
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleChange}
            placeholder="Address*"
            className="Address-input-feild"
          />
        </div>
        <div className='submit'><button type='submit' className='sign-up-button'>Sign Up</button></div>
      </form>
    </div>
  );
}

export default SignUpForm;
