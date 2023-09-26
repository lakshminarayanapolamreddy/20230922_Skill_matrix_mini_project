import React, { useState, useEffect } from 'react';
import AdminService from '../../services/AdminService';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';

const SkillsOfUser = () => {
    const cookies = new Cookies();
    const Email = cookies.get("Email");
    const [userSkills, setUserSkills] = useState([]);
    const [skills, setSkills] = useState([]);
    const [userDetails, setUserDetails] = useState({});
    useEffect(() => {
        GetAllDetails();
        userAddedSkills();
    }, []);
    console.log(userDetails.Email, "is my Email")
    const GetAllDetails = () => {
        AdminService.getAllTrainingDetails().then((d) => {
            const user = d.data.alldata.find((userDetails) => userDetails.Email === Email);
            setUserDetails(user);
        })
        .catch((err) => {
            console.error(err);
        });
    };

    const userAddedSkills = async () => {
      try {
          const response = await AdminService.userSkillDetails();
          if (response.data.allSkillDetails) {
              setUserSkills(response.data.allSkillDetails);
          }
      } catch (err) {
          console.error(err);
      }
  };

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
    };

    const handleSubmit = async () => {
        try {
            const response = await AdminService.addSkills(Email, skills);
            if (response.data.message === 'Skill added successfully') {
                toast.success('Skills added successfully');
                setSkills([]); // Clear the skills array after successful submission
            } else {
                toast.error('Failed to add skills');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while adding skills');
        }
    };

    return (
        <div>
            <div className="profile-details">
                <h2>User's Added Skills:</h2>
                <ul>
                    {userSkills.map((skill, index) => (
                        <li key={index}>{skill.Skill}</li>
                    ))}
                </ul>
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
        </div>
    );
};

export default SkillsOfUser;
