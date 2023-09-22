import { toast } from 'react-toastify';
import LoginService from "../../services/LoginService";
import { useState } from 'react';
function SignUpForm() {
  const [state, setState] = useState({
    name: "",
    empid:"",
    email: "",
    password: "",
    designation: "",
    mobile: "",
    empid:"",
    address:"",
    blood_group:"",
  });
  const [skills, setSkills] = useState([]);
  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };
  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };
  const handleSkillChange = (event, index) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = event.target.value;
    setSkills(updatedSkills);
  }
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    console.log(state);
    let data= LoginService.saveDetails(state).then((d)=>{
      if (d.data.message==="User added"){
        toast.success(d.data.message);
      } else if (d.data.message==="Password must have a capital letter a small letter and a number and include any special character"){
        toast.warning(d.data.message);
      } else if (d.data.message=== "In email domain name should contain jmangroup"){
        toast.error(d.data.message);
      } else if (d.data.message=== "User already exists!"){
        toast.error(d.data.message);
      } else if (d.data.message=== "All fields are mandatory ; Please fill it."){
        toast.warning(d.data.message);
      } else if (d.data.message=== "Invalid Employee Id"){
        toast.error(d.data.message)
      }
    })
    .catch(err=>{
      toast.error("Email And Password is not matching")
    })
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
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
            name = 'designation'
            value = {state.designation}
            onChange={handleChange}
            placeholder='Designation*' 
            className='designation-input-feild'
          />
        </div>

        <div className='mobile'>
          <input
            type='text'
            name = 'mobile'
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
        <div className='add-skill'>
          <label>Add Your Skills</label>
            <button
              className="add-skill-button"
              type="button"
              onClick={handleAddSkill}
            >
              +
            </button>
            {skills.map((skill, index) => (
              <div key={index} className="skill-row">
                <input
                  type="text"
                  className='skill-text-feild'
                  value={skill}
                  onChange={(e) => handleSkillChange(e, index)}
                />
                <button
                  className="remove-skill-button"
                  type="button"
                  onClick={() => handleRemoveSkill(index)}
                >
                  <img class = 'delete-image' src = 'https://static-00.iconduck.com/assets.00/delete-emoji-409x512-y77jpzk2.png' />
                </button>
              </div>
            ))}
          </div>
        <div className='submit'><button type = 'submit' className = 'sign-up-button'>Sign Up</button></div>
      </form>
    </div>
  );
}

export default SignUpForm;
