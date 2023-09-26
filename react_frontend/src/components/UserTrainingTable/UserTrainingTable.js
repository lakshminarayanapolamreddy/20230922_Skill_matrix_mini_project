import React, { useState, useEffect } from 'react';
import './UserTrainingTable.css';
import SideNav from '../side_nav/side_nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AdminService from '../../services/AdminService';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
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
        <div>
            <div className="large-screen-nav">
                <SideNav />
            </div>
            <h1 className="lbheading"><strong>Learning and Development</strong></h1>
            <div><SkillsOfUser /></div>
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
                </div>
            )}
        </div>
    );
};

export default UserTrainingTable;
