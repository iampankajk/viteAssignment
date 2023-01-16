import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';
const formState = {
  fullName: '',
  dateOfBirth: '',
  gender: '',
  email: '',
  phoneNumber: '',
  currentAddress: '',
  governmentAssistance: '',
  occupation: '',
  annualIncome: '',
  property: '',
  debt: '',
  eviction: '',
  documents: [],
}

const RegistrationForm = () => {
  const [showId,setShowId] = useState(false)
  const [formData, setFormData] = useState(formState);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      applicationId: Date.now().toString(),
      status: 'pending',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newApplicant;
    if (
      +formData.annualIncome < 50000 ||
      formData.governmentAssistance === 'no' ||
      formData.property === 'no'
    ) {
      newApplicant = { ...formData, povertyStatus:'Below Poverty' };
    }else{
      newApplicant = {...formData, povertyStatus:'Above Poverty'}
    }

    if (!JSON.parse(localStorage.getItem('applicants'))) {
      localStorage.setItem('applicants', JSON.stringify([]));
    }
    const applicants = JSON.parse(localStorage.getItem('applicants'));
    const addApplicant = [...applicants, newApplicant];
    localStorage.setItem('applicants', JSON.stringify(addApplicant));
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      documents: event.target.files,
    });
  };

  return (
   <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type='text'
          name='fullName'
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type='date'
          name='dateOfBirth'
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <select name='gender' value={formData.gender} onChange={handleChange}>
          <option value=''></option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>
      </label>
      <br />
      <label>
        Email Address:
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type='tel'
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Current Address:
        <input
          type='text'
          name='currentAddress'
          value={formData.currentAddress}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Are you currently receiving any government assistance?
        <select
          name='governmentAssistance'
          value={formData.governmentAssistance}
          onChange={handleChange}
        >
          <option value=''></option>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
      </label>
      <br />
      <label>
        What is your current occupation?
        <input
          type='text'
          name='occupation'
          value={formData.occupation}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        What is your annual income?
        <input
          type='number'
          name='annualIncome'
          value={formData.annualIncome}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Do you own any property?
        <select
          name='property'
          value={formData.property}
          onChange={handleChange}
        >
          <option value=''></option>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
      </label>
      <br />
      <label>
        Are you currently in any debt?
        <select name='debt' value={formData.debt} onChange={handleChange}>
          <option value=''></option>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
      </label>
      <br />
      <label>
        Have you ever been evicted from a residence?
        <select
          name='eviction'
          value={formData.eviction}
          onChange={handleChange}
        >
          <option value=''></option>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
      </label>
      <br />
      <label>
        Upload Photograph:
        <input
          type='file'
          name='photograph'
          onChange={handleFileChange}
          accept='image/*'
        />
      </label>
      <br />
      <label>
        Upload Certificates:
        <input
          type='file'
          name='certificates'
          onChange={handleFileChange}
          multiple
          accept='.pdf, .doc, .docx'
        />
      </label>
      <br />
      <input type='submit' value='Submit' />
    </form>
  );
};

export default RegistrationForm;
