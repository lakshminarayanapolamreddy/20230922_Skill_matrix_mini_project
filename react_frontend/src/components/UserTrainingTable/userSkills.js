import React, { useState, useEffect } from 'react';
import './UserTrainingTable.css';
import SideNav from '../side_nav/side_nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AdminService from '../../services/AdminService';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserTrainingTable = () => {
  const cookies = new Cookies();
  const Email = cookies.get("Email");
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    GetAllDetails();
  }, []);

  const GetAllDetails = () => {
    AdminService.getAllTrainingDetails()
      .then((d) => {
        const user = d.data.alldata.find((user) => user.Email === Email);
        setUserDetails(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [skills, setSkills] = useState([]);
  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    // Fetch the user's skills when the component mounts
    const fetchUserSkills = async () => {
      try {
        const response = await axios.get(`/api/skills/user-skills/${userDetails.Id}`);
        if (response.data.skills) {
          setUserSkills(response.data.skills.map((item) => item.Skill));
        } else {
          toast.error('Skills not found');
        }
      } catch (error) {
        console.error(error);
        toast.error('An error occurred while fetching skills');
      }
    };

    if (userDetails) {
      fetchUserSkills();
    }
  }, [userDetails]);

  // Rest of your component code...

  return (
    <div>
      <div className="large-screen-nav">
        <SideNav />
      </div>
      <h1 className="lbheading"><strong>Learning and Development</strong></h1>
      {userDetails && (
        <div className="profile-card">
          <div className="profile-header">
            <h2>{userDetails.FullName}</h2>
            <p>{userDetails.Designation}</p>
            <div className="profile-details">
              <table>
                <tbody>
                  <tr>
                    <td>Id:</td>
                    <td>{userDetails.Id}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{userDetails.Email}</td>
                  </tr>
                  <tr>
                    <td>Employee ID:</td>
                    <td>{userDetails.EmployeeId}</td>
                  </tr>
                  <tr>
                    <td>Mobile:</td>
                    <td>{userDetails.Mobile}</td>
                  </tr>
                  <tr>
                    <td>Blood Group:</td>
                    <td>{userDetails.BloodGroup}</td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>{userDetails.Address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="profile-details">
            <table>
              <tbody>
                {/* User details here */}
              </tbody>
            </table>
          </div>
        </div>
      )}
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
              placeholder={`Skill ${index + 1}`}
              onChange={(e) => handleSkillChange(e, index)}
            />
            <button
              className="remove-skill-button"
              type="button"
              onClick={() => handleRemoveSkill(index)}
            >
              <img className='delete-image' src='https://static-00.iconduck.com/assets.00/delete-emoji-409x512-y77jpzk2.png' alt='delete' />
            </button>
          </div>
        ))}
        <button onClick={handleSubmit} className="skill-submit-button">Submit Skills</button>
      </div>

      {/* Skills Display Section */}
      {userSkills.length > 0 && (
        <div className="skills-section">
          <h3>Your Skills:</h3>
          <ul>
            {userSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserTrainingTable;
