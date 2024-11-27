import React, { useState } from 'react';
import Tab from './Tab';
import TabContent from './TabContent';

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        studentId: '',
        program: '',
        yearLevel: '',
        gpa: '',
        hobbies: '',
        skills: '',
        notes: ''
    });
    const [errors, setErrors] = useState({});

    const tabs = ['personal', 'contact', 'academic', 'additional'];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.studentId) newErrors.studentId = 'Student ID is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = (e) => {
        e.preventDefault();
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.studentId) newErrors.studentId = 'Student ID is required';
        setErrors(newErrors);
    
        const isValid = Object.keys(newErrors).length === 0;
    
        if (isValid) {
            try {
                const response = await fetch('http://localhost/pdc20/submit.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
    
                const result = await response.json();
    
                if (response.ok) {
                    alert('Form submitted successfully!');
                    setFormData({
                        firstName: '', lastName: '', dob: '', gender: '', email: '',
                        phone: '', address: '', city: '', studentId: '', program: '',
                        yearLevel: '', gpa: '', hobbies: '', skills: '', notes: ''
                    });
                } else {
                    alert('Error: ' + result.error);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            }
        } else {
            alert('Please correct the errors and try again.');
        }
    };
    

    const formDataBelongsToTab = (tab, field) => {
        const tabFields = {
            personal: ['firstName', 'lastName', 'dob', 'gender'],
            contact: ['email', 'phone', 'address', 'city'],
            academic: ['studentId', 'program', 'yearLevel', 'gpa'],
            additional: ['hobbies', 'skills', 'notes']
        };
        return tabFields[tab]?.includes(field);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm border-0">
                <div className="card-header bg-black text-white text-center py-3">
                    <h3 className="mb-0">Registration Form</h3>
                </div>
                <div className="card-body">
                    <ul className="nav nav-tabs justify-content-center mb-4">
                        {tabs.map(tab => (
                            <li className="nav-item" key={tab}>
                                <a
                                    className={`nav-link ${activeTab === tab ? 'active font-weight-bold' : ''}`}
                                    style={{
                                        borderRadius: '0.25rem',
                                        margin: '0 0.25rem',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onClick={() => handleTabChange(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1).replace('Info', ' Info')}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <form onSubmit={activeTab === 'additional' ? handleSubmit : handleNext}>
                        <TabContent
                            activeTab={activeTab}
                            formData={formData}
                            onChange={handleChange}
                            errors={errors}
                        />

                        <div className="mt-4">
                            {activeTab === 'additional' ? (
                                <button type="submit" className="btn btn-primary btn-lg w-100">Submit</button>
                            ) : (
                                <button type="button" className="btn btn-secondary btn-lg w-100" onClick={handleNext}>Next</button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TabbedForm;
