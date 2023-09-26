import React, { useState, useEffect } from 'react';
import SideNav from '../side_nav/side_nav';
import AdminService from '../../services/AdminService';
import Cookies from 'universal-cookie';
import SkillsOfUser from './userSkills'

const UserTrainingTable = () => {
    const cookies = new Cookies();
    const Email = cookies.get("Email");
    const [userDetails, setUserDetails] = useState({});
    useEffect(() => {
        GetAllDetails();
    }, []);

    const GetAllDetails = () => {
        AdminService.getAllTrainingDetails().then((d) => {
            const user = d.data.alldata.find((user) => user.Email === Email);
            setUserDetails(user);
        })
        .catch((err) => {
            console.error(err);
        });
    };

    return (
        <div className='profile-container'>
            <div className="side-nav">
                <SideNav />
            </div>
            <div className='profile-details'>
                <div>
                    {userDetails && (
                        <div className="profile-card">
                                <div class = 'name-and-designation'>
                                    <h2 className='userName'>{userDetails.FullName}</h2>
                                    <p className='user-designation'>{userDetails.Designation}</p>
                                </div>
                                <div className="profile-details">
                                    <h5 className='user-details-heading'>User Details</h5>
                                    <table className='userDetails'>
                                        <tbody>
                                            <tr>
                                                <td className='td-heading'>Email:</td>
                                                <td>{userDetails.Email}</td>
                                            </tr>
                                            <tr>
                                                <td className='td-heading'>Employee ID:</td>
                                                <td>{userDetails.EmployeeId}</td>
                                            </tr>
                                            <tr>
                                                <td className='td-heading'>Mobile:</td>
                                                <td>{userDetails.Mobile}</td>
                                            </tr>
                                            <tr>
                                                <td className='td-heading'>Blood Group:</td>
                                                <td>{userDetails.BloodGroup}</td>
                                            </tr>
                                            <tr>
                                                <td className='td-heading'>Address:</td>
                                                <td>{userDetails.Address}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    )}
                </div>
                <div className='skill-display'><SkillsOfUser /></div>
            </div>
        </div>
    );
};

export default UserTrainingTable;
