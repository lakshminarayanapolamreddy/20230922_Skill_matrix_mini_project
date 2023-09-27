import React, { useState, useEffect } from 'react';
import AdminService from '../../services/AdminService';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';

const SkillsOfUser = () => {
    const cookies = new Cookies();
    const userEmail = cookies.get("Email");
    const [userSkills, setUserSkills] = useState([]);
    const [skills, setSkills] = useState([]);
    const [userDetails, setUserDetails] = useState({});
    const [showSubmitButton, setShowSubmitButton] = useState(false); // State for showing the submit button
    
    useEffect(() => {
        GetAllDetails();
        userAddedSkills();
    }, []);

    const GetAllDetails = () => {
        AdminService.getAllTrainingDetails().then((d) => {
            const user = d.data.alldata.find((userDetails) => userDetails.Email === userEmail);
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
        // Show the submit button when the user clicks "Add Skills"
        setShowSubmitButton(true);
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
            const response = await AdminService.addSkills(userEmail, skills);
            if (response.data.message === 'Skill added successfully') {
                toast.success('Skills added successfully');
                userAddedSkills();
                setSkills([]);
                // Hide the submit button after successful submission
                setShowSubmitButton(false);
            } else {
                toast.error('Failed to add skills');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while adding skills');
        }
    };
    const filteredSkills = userSkills.filter((userSkill) => userSkill.Email === userEmail);

    const handleDeleteSkill = async (skillId,index) => {
        try {
            skillId = parseInt(skillId, 10);
            console.log('skillId',skillId)
            const response = await AdminService.deleteSkill(skillId);
            if (response.status === 204) {
                toast.success("Skill Deleted Successfully")
                userAddedSkills();
            } else {
                toast.error("Skill deletion unsuccessful")
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <div className='skills-container'>
            <div className="skill-details">
            <table className='skill-table'>
                <thead className='table-head'>
                    <tr>
                        <th>
                            <h4>Skills</h4>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                {filteredSkills.map((skill, index) => (
                    <tr key={index} className="skill-list-item">
                        <td className='skill-item'>
                            <p className='skill-text'>{skill.Skill}</p>
                        </td>
                        <td className='skill-delete'>
                            <button
                                className="remove-skill-button"
                                type="button"
                                onClick={() => handleDeleteSkill(skill.Id,index)}
                            >
                                <img className='delete-image' src='https://static-00.iconduck.com/assets.00/delete-emoji-409x512-y77jpzk2.png' alt='delete' />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
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
                            required
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
                {/* Conditional rendering of the submit button */}
                {showSubmitButton && (
                    <div className='add-button-container'>
                        <button onClick={handleSubmit} className="skill-submit-button">Submit Skills</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillsOfUser;
