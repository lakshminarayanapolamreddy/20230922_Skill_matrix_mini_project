import React, { useState, useEffect } from 'react';
import './UserTrainingTable.css';
import SideNav from '../side_nav/side_nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AdminService from '../../services/AdminService';
import Cookies from 'universal-cookie';

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
                console.log(d.data.alldata);
                const user = d.data.alldata.find((user) => user.Email === Email);
                setUserDetails(user);
            })
            .catch((err) => {
                console.log(err);
            });
    };

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
    };

    return (
        <div>
            <div className="large-screen-nav">
                <SideNav />
            </div>
            <div>
                <h1 className="lbheading"><strong>Learning and Development</strong></h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Fullname</th>
                            <th>Employee Id</th>
                            <th>Email</th>
                            <th>Designation</th>
                            <th>Mobile</th>
                            <th>Blood Group</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Display user details if userDetails is not null */}
                        {userDetails && (
                            <tr key={userDetails.Id}>
                                <td>{userDetails.Id}</td>
                                <td>{userDetails.FullName}</td>
                                <td>{userDetails.EmployeeId}</td>
                                <td>{userDetails.Email}</td>
                                <td>{userDetails.Designation}</td>
                                <td>{userDetails.Mobile}</td>
                                <td>{userDetails.BloodGroup}</td>
                                <td>{userDetails.Address}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <form>
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
                                    <img className='delete-image' src='https://static-00.iconduck.com/assets.00/delete-emoji-409x512-y77jpzk2.png' alt='delete' />
                                </button>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserTrainingTable;
