import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [applicants, setApplicants] = useState([]);
  const [edit,setEdit] = useState(false);
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('applicants'));
    const role = localStorage.getItem('role');
    if(role==='r1'){
        setEdit(true)
    }
    setApplicants(list);
  }, []);

  const handleAction = (id, action) => {
    let applicants = JSON.parse(localStorage.getItem('applicants'));
    applicants = applicants.map((applicant) => {
      if (applicant.applicationId === id) {
        return { ...applicant, status: action };
      }
      return applicant;
    });
    setApplicants(applicants);
    localStorage.setItem('applicants', JSON.stringify(applicants));
  };

  return (
    <div>
      <h1>Applicant Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Poverty Status</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant) => (
            <tr key={applicant.applicationId}>
              <td>{applicant.fullName}</td>
              <td>{applicant.email}</td>
              <td>{applicant.povertyStatus}</td>
              <td>{applicant.status}</td>
              <td>
                {applicant.status === 'pending' && (
                  <>
                    {edit && <button
                        onClick={() =>
                        handleAction(applicant.applicationId, 'Approved')
                        }
                    >
                        Approve
                    </button>}
                    {edit && <button
                      onClick={() =>
                        handleAction(applicant.applicationId, 'Rejeced')
                      }
                    >
                      Deny
                    </button>}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
