
import { useState } from 'react';
import './Home.css';
import collegeLogo from './assets/college-logo.png';

// Study Materials
const studyMaterials = [
    {
        id: 1,
        department: 'CS',
        semester: 1,
        subject: 'Subject 1',
        title: 'Programming Notes',
        fileName: 'Programming Notes.docx',
        fileType: 'WORD',
        downloadUrl: 'https://nalanda460-my.sharepoint.com/:w:/g/personal/admin_nfptech_in/IQAlFKO83CyIR4F2TazJ2tckAShlycFOqE-IvyK5di1d1H4?rtime=B4WvxXI730g'
    },
    {
        id: 1,
        department: 'CS',
        semester: 1,
        subject: 'Subject 1',
        title: 'Programming Notes',
        fileName: 'Programming Notes.docx',
        fileType: 'WORD',
        downloadUrl: 'https://nalanda460-my.sharepoint.com/:w:/g/personal/admin_nfptech_in/IQAlFKO83CyIR4F2TazJ2tckAShlycFOqE-IvyK5di1d1H4?rtime=B4WvxXI730g'
    },    {
        id: 1,
        department: 'CS',
        semester: 1,
        subject: 'Subject 1',
        title: 'Programming Notes',
        fileName: 'Programming Notes.docx',
        fileType: 'WORD',
        downloadUrl: 'https://nalanda460-my.sharepoint.com/:w:/g/personal/admin_nfptech_in/IQAlFKO83CyIR4F2TazJ2tckAShlycFOqE-IvyK5di1d1H4?rtime=B4WvxXI730g'
    }
];

// Department Details
const departments = [
    { id: 'CS', name: 'Computer Science', icon: 'bi-laptop' },
    { id: 'EC', name: 'Electronics & Communication', icon: 'bi-cpu' },
    { id: 'Civil', name: 'Civil Engineering', icon: 'bi-building' }
];

// Semester Details
const semesters = [1, 2, 3, 4, 5, 6];

// Subject Details
const subjects = [1, 2, 3, 4, 5];

function Home() {
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedSemester, setSelectedSemester] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);

    // Select Department
    const handleDepartmentSelect = (department) => {
        setSelectedDepartment(department);
        setSelectedSemester(null);
        setSelectedSubject(null);
    };

    // Select Semester
    const handleSemesterSelect = (semester) => {
        setSelectedSemester(semester);
        setSelectedSubject(null);
    };

    // Select Subject
    const handleSubjectSelect = (subject) => {
        setSelectedSubject(subject);
    };

    // Back to Departments
    const handleBackToDepartments = () => {
        setSelectedDepartment(null);
        setSelectedSemester(null);
        setSelectedSubject(null);
    };

    // Back to Semesters
    const handleBackToSemesters = () => {
        setSelectedSemester(null);
        setSelectedSubject(null);
    };

    // Back to Subjects
    const handleBackToSubjects = () => {
        setSelectedSubject(null);
    };

    // Filter Study Materials
    const filteredMaterials = studyMaterials.filter((material) =>
        material.department === selectedDepartment &&
        material.semester === selectedSemester &&
        material.subject === selectedSubject
    );

    return (
        <div className="home-page">

            {/* Header */}
            <header className="site-header">
                <div className="header-container">

                    <div className="college-brand">
                        <img
                            src={collegeLogo}
                            alt="College Logo"
                            className="logo"
                        />

                        <div>
                            <h1 className="college-heading">
                                NALANDA FOUNDATIONS POLYTECHNIC
                            </h1>

                            <p className="college-subheading">
                                AICTE Approved | Govt. Recognized | DTE Affiliated
                            </p>
                        </div>
                    </div>

                    <a
                        href="mailto:info@nalanda.edu.in"
                        className="contact-button"
                    >
                        <i className="bi bi-envelope-fill me-2"></i>
                        Contact Us
                    </a>

                </div>
            </header>

            {/* Welcome Section */}
            <section className="welcome-section">
                <div className="container">
                    <h2>Student Resource Hub</h2>
                    <p>
                        Access your study materials, notes and learning resources
                        in one place.
                    </p>
                </div>
            </section>

            <main className="container resource-container">

                {/* Department Selection */}
                {!selectedDepartment && (
                    <>
                        <div className="resource-heading">
                            <h3>Select Your Department</h3>
                            <p>
                                Choose your engineering department to continue.
                            </p>
                        </div>

                        <div className="row g-4 department-list">
                            {departments.map((department) => (
                                <div
                                    className="col-md-4"
                                    key={department.id}
                                >
                                    <div
                                        className="department-card"
                                        onClick={() =>
                                            handleDepartmentSelect(department.id)
                                        }
                                    >
                                        <i className={`bi ${department.icon}`}></i>

                                        <h4>{department.name}</h4>

                                        <span>
                                            View Semesters
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Semester Selection */}
                {selectedDepartment && !selectedSemester && (
                    <>
                        <button
                            className="back-button"
                            onClick={handleBackToDepartments}
                        >
                            <i className="bi bi-arrow-left me-2"></i>
                            Back to Departments
                        </button>

                        <div className="resource-heading">
                            <h3>
                                {departments.find(
                                    (department) =>
                                        department.id === selectedDepartment
                                )?.name}
                            </h3>
                            <p>Select your semester.</p>
                        </div>

                        <div className="row g-4">
                            {semesters.map((semester) => (
                                <div
                                    className="col-md-4 col-sm-6"
                                    key={semester}
                                >
                                    <div
                                        className="semester-card"
                                        onClick={() =>
                                            handleSemesterSelect(semester)
                                        }
                                    >
                                        <i className="bi bi-book-half"></i>
                                        <h4>Semester {semester}</h4>
                                        <span>View Subjects</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Subject Selection */}
                {selectedDepartment &&
                    selectedSemester &&
                    !selectedSubject && (
                        <>
                            <button
                                className="back-button"
                                onClick={handleBackToSemesters}
                            >
                                <i className="bi bi-arrow-left me-2"></i>
                                Back to Semesters
                            </button>

                            <div className="resource-heading">
                                <h3>Semester {selectedSemester}</h3>
                                <p>
                                    Select a subject to download study materials.
                                </p>
                            </div>

                            <div className="row g-4">
                                {subjects.map((subject) => (
                                    <div
                                        className="col-md-4 col-sm-6"
                                        key={subject}
                                    >
                                        <div
                                            className="subject-card"
                                            onClick={() =>
                                                handleSubjectSelect(
                                                    `Subject ${subject}`
                                                )
                                            }
                                        >
                                            <i className="bi bi-journal-text"></i>
                                            <h4>Subject {subject}</h4>
                                            <span>Download Study Materials</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                {/* Study Materials */}
                {selectedDepartment &&
                    selectedSemester &&
                    selectedSubject && (
                        <>
                            <button
                                className="back-button"
                                onClick={handleBackToSubjects}
                            >
                                <i className="bi bi-arrow-left me-2"></i>
                                Back to Subjects
                            </button>

                            <div className="resource-heading">
                                <h3>{selectedSubject}</h3>
                                <p>
                                    Semester {selectedSemester} - Study Materials
                                </p>
                            </div>

                            {filteredMaterials.length > 0 ? (
                                <div className="row g-4">
                                    {filteredMaterials.map((material) => (
                                        <div
                                            className="col-md-4 col-sm-6"
                                            key={material.id}
                                        >
                                            <div className="material-card">

                                                <div className="material-icon">
                                                    <i className="bi bi-file-earmark-word-fill"></i>
                                                </div>

                                                <h5>{material.title}</h5>

                                                <p>{material.fileName}</p>

                                                <a
                                                    href={material.downloadUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-primary"
                                                >
                                                    <i className="bi bi-download me-2"></i>
                                                    Download Word File
                                                </a>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="empty-materials">
                                    <i className="bi bi-folder2-open"></i>
                                    <h4>No Study Materials Available</h4>
                                    <p>
                                        Study materials for this subject
                                        will be available soon.
                                    </p>
                                </div>
                            )}
                        </>
                    )}

            </main>

            {/* Footer */}
            <footer className="home-footer">
                <p>
                    © {new Date().getFullYear()} Nalanda Foundations Polytechnic.
                    All Rights Reserved.
                </p>
            </footer>

        </div>
    );
}

export default Home;
