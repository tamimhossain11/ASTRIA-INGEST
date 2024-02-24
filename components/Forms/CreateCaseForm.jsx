// components/CreateCaseForm.js

import React, { useState } from 'react';
import axios from 'axios';

const CreateCaseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    comments: '',
    attorney: '',
    ftkCaseFolderPath: '',
    responsiveFilePath: '',
    projectType: '',
    processingMode: 0,
    effectiveEndDate: '',
    effectiveStartDate: '',
    entropyEnabled: false,
    extractCreditCardNumbers: false,
    extractEmailAddresses: false,
    extractLocations: false,
    extractOrganizations: false,
    extractPeople: false,
    extractPhoneNumbers: false,
    extractSSNs: false,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/api/v2/enterpriseapi/core/createcase',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'EnterpriseAPIKey': '52942efe-61e6-45dd-bdaa-5b1b120da0b5',
          },
        }
      );
      console.log('Case created successfully:', response.data);
      // Handle success
    } catch (error) {
      console.error('Error creating case:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Comments:
        <input
          type="text"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </label>
      <label>
        Attorney:
        <input
          type="text"
          name="attorney"
          value={formData.attorney}
          onChange={handleChange}
        />
      </label>
      <label>
        FTK Case Folder Path:
        <input
          type="text"
          name="ftkCaseFolderPath"
          value={formData.ftkCaseFolderPath}
          onChange={handleChange}
        />
      </label>
      <label>
        Responsive File Path:
        <input
          type="text"
          name="responsiveFilePath"
          value={formData.responsiveFilePath}
          onChange={handleChange}
        />
      </label>
      <label>
        Project Type:
        <input
          type="text"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
        />
      </label>
      <label>
        Processing Mode:
        <input
          type="number"
          name="processingMode"
          value={formData.processingMode}
          onChange={handleChange}
        />
      </label>
      <label>
        Effective End Date:
        <input
          type="text"
          name="effectiveEndDate"
          value={formData.effectiveEndDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Effective Start Date:
        <input
          type="text"
          name="effectiveStartDate"
          value={formData.effectiveStartDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Entropy Enabled:
        <input
          type="checkbox"
          name="entropyEnabled"
          checked={formData.entropyEnabled}
          onChange={handleChange}
        />
      </label>
      <label>
        Extract Credit Card Numbers:
        <input
          type="checkbox"
          name="extractCreditCardNumbers"
          checked={formData.extractCreditCardNumbers}
          onChange={handleChange}
        />
      </label>
      {/* Add similar input fields for other parameters */}
      <button type="submit">Create Case</button>
    </form>
  );
};

export default CreateCaseForm;
