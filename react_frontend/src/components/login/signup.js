import { toast } from 'react-toastify';
import LoginService from "../../services/LoginService";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [state, setState] = useState({
    name: "",
    empid:"",
    email: "",
    password: "",
    designation: "",
    mobile: "",
    address:"",
    blood_group:"",
  });

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const navigate = useNavigate();

  const handleOnSubmit = async evt => {
    evt.preventDefault();
    console.log(state);
    
    try {
      const response = await LoginService.saveDetails(state);
      
      switch (response.data.message) {
        case "User added":
          toast.success(response.data.message);
          navigate('/signin');
          break;
        case "Password must have a capital letter a small letter and a number and include any special character":
          toast.warning(response.data.message);
          break;
        case "In email domain name should contain jmangroup":
          toast.error(response.data.message);
          break;
        case "User already exists!":
          toast.error(response.data.message);
          break;
        case "All fields are mandatory; Please fill them.":
          toast.warning(response.data.message);
          break;
        case "Invalid Employee Id":
          toast.error(response.data.message);
          break;
        default:
          // Handle other cases if needed
          break;
      }

      // Clear the form fields after submission
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
    } catch (error) {
      console.error("Error:", error);
      toast.error("Email and Password do not match");
    }
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
