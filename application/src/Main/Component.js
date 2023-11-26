import React, { useState } from 'react';
import axios from 'axios';
const REACT_APP_API_URL="http://127.0.0.1:5005";
const API_URL = REACT_APP_API_URL;
console.log(REACT_APP_API_URL);

function Component() {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');
    const [salaryRange, setSalaryRange] = useState('');
    const [companyProfile, setCompanyProfile] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [benefits, setBenefits] = useState('');
    const [telecommuting, setTelecommuting] = useState(false);
    const [hasCompanyLogo, setHasCompanyLogo] = useState(false);
    const [hasQuestions, setHasQuestions] = useState(false);
    const [employmentType, setEmploymentType] = useState('');
    const [requiredExperience, setRequiredExperience] = useState('');
    const [requiredEducation, setRequiredEducation] = useState('');
    const [industry, setIndustry] = useState('');
    const [functionType, setFunctionType] = useState('');
    const [prediction, setPrediction] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const combinedData = {
        title,
        location,
        department,
        salary_range: salaryRange,
        company_profile: companyProfile,
        description,
        requirements,
        benefits,
        telecommuting,
        has_company_logo: hasCompanyLogo ? 't' : 'f',
        has_questions: hasQuestions ? 't' : 'f',
        employment_type: employmentType,
        required_experience: requiredExperience,
        required_education: requiredEducation,
        industry,
        function: functionType
      };
      
      try {
        console.log(combinedData);
        const response = await axios.post('http://127.0.0.1:5005/predict', combinedData);
        setPrediction(response.data.prediction);
        if (response.data.prediction == 'f') {
            window.alert("The job listing is most likely NOT FRADULENT");
        } else {
            window.alert("The job listing is most likely FRADULENT");
        }
      } catch (error) {
        console.error('Error during prediction:', error);
        window.alert('Error during prediction:', error);
      }
    };
    return (
        <div className='font-vango w-3/4'>
            <div className="w-full bg-transparent rounded-lg dark:border dark:white dark:white justify-center">
                <div className="p-6 space-y-4 md:space-y-3 justify-center items-center flex flex-col">
                    <h1>Job Scam Prediction</h1>
                    <h3>Big Data Big Impact Fall 2023 Demo</h3>
                    <h1>Job Scam Prediction</h1>
                    <h3>Big Data Big Impact Fall 2023 Demo</h3>
                    <h1>Job Scam Prediction</h1>
                    <h3>Big Data Big Impact Fall 2023 Demo</h3>
                    <h1>Job Scam Prediction</h1>
                    <h3>Big Data Big Impact Fall 2023 Demo</h3>
                    <h1>Job Scam Prediction</h1>
                    <h3>Big Data Big Impact Fall 2023 Demo</h3>
                    <h1>Job Scam Prediction</h1>
                    <h3>Big Data Big Impact Fall 2023 Demo</h3>
                    <h1>Job Scam Prediction</h1>
                    <h3>Big Data Big Impact Fall 2023 Demo</h3>
                    <form className="space-y-4 md:space-y-6 w-full" onSubmit={handleSubmit}>
                        {/* Title */}
                        <div className="relative rounded-lg shadow-sm">
                            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Job Title" name="title" id="title" required
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5" />
                        </div>
                        {/* Location */}
                        <div className="relative rounded-lg shadow-sm">
                            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" name="location" id="location" required
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5" />
                        </div>
                        {/* Department */}
                        <div className="relative rounded-lg shadow-sm">
                            <input value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Department" name="department" id="department"
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5" />
                        </div>
                        {/* Salary Range */}
                        <div className="relative rounded-lg shadow-sm">
                            <input value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)} placeholder="Salary Range" name="salary_range" id="salary_range" required
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5" />
                        </div>
                        {/* Company Profile */}
                        <div className="relative rounded-lg shadow-sm">
                            <input value={companyProfile} onChange={(e) => setCompanyProfile(e.target.value)} placeholder="Company Profile" name="company_profile" id="company_profile" required
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5" />
                        </div>
                        {/* Description */}
                        <div className="relative rounded-lg shadow-sm">
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Job Description" name="description" id="description" required
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5" />
                        </div>
                        {/* Requirements */}
                        <div className="relative rounded-lg shadow-sm">
                            <textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} placeholder="Job Requirements" name="requirements" id="requirements" required
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5" />
                        </div>
                        {/* Benefits */}
                        <div className="relative rounded-lg shadow-sm">
                            <textarea value={benefits} onChange={(e) => setBenefits(e.target.value)} placeholder="Benefits" name="benefits" id="benefits"
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5" />
                        </div>
                        {/* Telecommuting */}
                        <div className="relative rounded-lg shadow-sm flex items-center">
                            <label htmlFor="telecommuting" className="mr-2">Telecommuting:</label>
                            <input type="checkbox" checked={telecommuting} onChange={(e) => setTelecommuting(e.target.checked)} name="telecommuting" id="telecommuting"
                            className="bg-gray-100 border border-gray-300 rounded-lg focus:ring-black focus:border-primary-600" />
                        </div>
                        {/* Has Company Logo */}
                        <div className="relative rounded-lg shadow-sm flex items-center">
                            <label htmlFor="has_company_logo" className="mr-2">Has Company Logo:</label>
                            <input type="checkbox" checked={hasCompanyLogo} onChange={(e) => setHasCompanyLogo(e.target.checked)} name="has_company_logo" id="has_company_logo"
                            className="bg-gray-100 border border-gray-300 rounded-lg focus:ring-black focus:border-primary-600" />
                        </div>
                        {/* Has Questions */}
                        <div className="relative rounded-lg shadow-sm flex items-center">
                            <label htmlFor="has_questions" className="mr-2">Has Questions:</label>
                            <input type="checkbox" checked={hasQuestions} onChange={(e) => setHasQuestions(e.target.checked)} name="has_questions" id="has_questions"
                            className="bg-gray-100 border border-gray-300 rounded-lg focus:ring-black focus:border-primary-600" />
                        </div>
                        {/* Employment Type */}
                        <div className="relative rounded-lg shadow-sm">
                            <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value)} name="employment_type" id="employment_type" required
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5">
                            {/* ... options ... */}
                                <option value="">Employment Type</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Full-Time"> Full-Time</option>
                                <option value="Temporary"> Temporary </option>
                                <option value="Contract">Contract</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {/* Required Experience */}
                        <div className="relative rounded-lg shadow-sm">
                            <select value={requiredExperience} onChange={(e) => setRequiredExperience(e.target.value)} name="required_experience" id="required_experience" required
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5">
                            {/* ... options ... */}
                                <option value="">Required Experience</option>
                                <option value="Not Applicable"> Not Applicable</option>
                                <option value="None"> None</option>
                                <option value="Internship">Internship</option>
                                <option value="Entry Level">Entry Level</option>
                                <option value="Mid-Senior Level">Mid-Senior Level</option>
                                <option value="Associate Level">Associate Level</option>
                                <option value="Director">Director</option>
                                <option value="Executive">Executive</option>
                                <option value="Other"> Other</option>
                            </select>
                        </div>
                        {/* Required Education */}
                        <div className="relative rounded-lg shadow-sm">
                            <select value={requiredEducation} onChange={(e) => setRequiredEducation(e.target.value)} name="required_education" id="required_education" required
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5">
                            {/* ... options ... */}
                                <option value="">Required Education</option>
                                <option value="High School or equivalent"> High School or equivalent</option>
                                <option value="Associate Degree"> Associate Degree</option>
                                <option value="Bachelor's Degree">Bachelor's Degre</option>
                                <option value="Master's Degree">Master's Degree</option>
                                <option value="Doctorate Degree">phD/Doctorate Degree</option>
                                <option value="Not specified">Not specified</option>
                            </select>
                        </div>
                        {/* Industry */}
                        <div className="relative rounded-lg shadow-sm">
                            <input value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="Industry" name="industry" id="industry" required
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5" />
                        </div>
                        {/* Function */}
                        <div className="relative rounded-lg shadow-sm">
                            <input value={functionType} onChange={(e) => setFunctionType(e.target.value)} placeholder="Function" name="function" id="function" required
                            className="pl-4 pr-4 bg-gray-100 border border-gray-300 text-black text-base rounded-lg focus:ring-black focus:border-primary-600 block w-full p-2.5" />
                        </div>

                        <button type="submit" className="relative rounded-lg shadow-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Check Listing
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Component;