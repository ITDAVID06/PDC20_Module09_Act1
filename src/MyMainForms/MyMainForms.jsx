import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import BasicForms from "./BasicForms";
import ControlledInput from "./ControlledInput";
import UnControlledInput from "./UncontrolledInput";
import TabbedForm from "./TabForm/TabbedForm";
import StudentDetails from "./StudentDetails";
import MyData from "./MyData";

const MyMainForms = () => {
    return (
        <div className="container my-5">
            <div className="text-center mb-4">
                <h1 className="display-4">React Forms App</h1>
            </div>
            <nav className="mb-4">
                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                        <Link to="basic-form" className="nav-link">
                            Basic Form
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="controlled-input" className="nav-link">
                            Controlled Input
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="uncontrolled-input" className="nav-link">
                            Uncontrolled Input
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="tabbed-form" className="nav-link">
                            Registration Form
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="student-details" className="nav-link">
                            View Student Details
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="my-data" className="nav-link">
                            User Table Details
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="card shadow-sm">
                <div className="card-body">
                    <Routes>
                        <Route path="basic-form" element={<BasicForms />} />
                        <Route path="controlled-input" element={<ControlledInput />} />
                        <Route path="uncontrolled-input" element={<UnControlledInput />} />
                        <Route path="tabbed-form" element={<TabbedForm />} />
                        <Route path="student-details" element={<StudentDetails />} />
                        <Route path="my-data" element={<MyData />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default MyMainForms;
