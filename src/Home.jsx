import { useState } from 'react'
import './Home.css'
import collegeLogo from './assets/college-logo.png'

const departments = [
    {
        id: 'CS',
        name: 'Computer Science',
        shortName: 'CS',
        icon: 'bi-laptop'
    },
    {
        id: 'EC',
        name: 'Electronics & Communication',
        shortName: 'EC',
        icon: 'bi-cpu'
    },
    {
        id: 'Civil',
        name: 'Civil Engineering',
        shortName: 'Civil',
        icon: 'bi-building'
    }
]

const semesters = [1, 2, 3, 4, 5, 6]

const subjects = departments.flatMap(department =>
    semesters.flatMap(semester =>
        Array.from({ length: 5 }, (_, index) => ({
            id: `${department.id}-${semester}-${index + 1}`,
            department: department.id,
            semester,
            name: `Subject ${index + 1}`,
            subjectNumber: index + 1
        }))
    )
)

const studyMaterials = [
    {
        id: 1,
        department: 'CS',
        semester: 1,
        subject: 'Subject 1',
        title: 'Programming Notes',
        fileName: 'Programming Notes.pdf',
        fileType: 'PDF',
        previewUrl: 'https://nalanda460-my.sharepoint.com/:w:/g/personal/admin_nfptech_in/IQAlFKO83CyIR4F2TazJ2tckAcDMV7v_jK0WcGZ-CsS8lso?e=ZpxQxj',
        downloadUrl: 'YOUR_ONEDRIVE_DOWNLOAD_LINK'
    },
    {
        id: 2,
        department: 'EC',
        semester: 3,
        subject: 'Subject 2',
        title: 'Electronics Notes',
        fileName: 'Electronics Notes.pdf',
        fileType: 'PDF',
        previewUrl: 'YOUR_ONEDRIVE_PDF_EMBED_LINK',
        downloadUrl: 'YOUR_ONEDRIVE_DOWNLOAD_LINK'
    }
]

function Home() {
    const [selectedDepartment, setSelectedDepartment] = useState(null)
    const [selectedSemester, setSelectedSemester] = useState(null)
    const [selectedSubject, setSelectedSubject] = useState(null)

    const [activeMaterial, setActiveMaterial] = useState(null)

    const departmentSubjects = subjects.filter(
        subject => subject.department === selectedDepartment
    )

    const semesterSubjects = departmentSubjects.filter(
        subject => subject.semester === selectedSemester
    )

    const subjectMaterials = studyMaterials.filter(
        material =>
            material.department === selectedDepartment &&
            Number(material.semester) === Number(selectedSemester) &&
            material.subject === selectedSubject
    )

    const selectDepartment = department => {
        setSelectedDepartment(department)
        setSelectedSemester(null)
        setSelectedSubject(null)
        setActiveMaterial(null)
    }

    const selectSemester = semester => {
        setSelectedSemester(semester)
        setSelectedSubject(null)
        setActiveMaterial(null)
    }

    const selectSubject = subject => {
        setSelectedSubject(subject)
        setActiveMaterial(null)
    }

    const backToDepartments = () => {
        setSelectedDepartment(null)
        setSelectedSemester(null)
        setSelectedSubject(null)
        setActiveMaterial(null)
    }

    const backToSemesters = () => {
        setSelectedSemester(null)
        setSelectedSubject(null)
        setActiveMaterial(null)
    }

    const backToSubjects = () => {
        setSelectedSubject(null)
        setActiveMaterial(null)
    }

    const selectedDepartmentDetails = departments.find(
        department => department.id === selectedDepartment
    )

    return (
        <div className="home-page">

            {/* College Header */}
            <header className="site-header sticky-top">
                <div className="container header-container">

                    <div className="college-brand">
                        <img
                            src={collegeLogo}
                            alt="College Logo"
                            className="logo"
                        />

                        <div>
                            <h5 className="college-heading">
                                Nalanda Foundations Polytechnic
                            </h5>

                            <p className="college-subheading">
                                Hubballi, Karnataka
                            </p>
                        </div>
                    </div>

                    <a
                        href="mailto:admin@nfptech.in"
                        className="contact-button"
                    >
                        <i className="bi bi-envelope-fill me-2"></i>
                        Contact Us
                    </a>

                </div>
            </header>

            <main className="container home-main">

                {/* Welcome Banner */}
                <section className="home-banner">
                    <div>
            <span className="banner-label">
              STUDENT LEARNING PORTAL
            </span>

                        <h1>Welcome to Student Resource Hub</h1>

                        <p>
                            Access your study materials, notes and learning resources
                            department-wise, semester-wise and subject-wise.
                        </p>
                    </div>

                    <i className="bi bi-mortarboard-fill banner-icon"></i>
                </section>

                {/* Resource Section */}
                <section className="resource-section">

                    <div className="resource-heading">
                        <div>
                            <h2>Study Resources</h2>
                            <p>
                                Select your department to explore learning materials.
                            </p>
                        </div>

                        <span className="resource-count">
              <i className="bi bi-folder2-open me-2"></i>
              3 Departments
            </span>
                    </div>

                    {/* Department Selection */}
                    {!selectedDepartment && (
                        <div className="row g-4 department-grid">

                            {departments.map(department => (
                                <div
                                    className="col-12 col-md-4"
                                    key={department.id}
                                >
                                    <button
                                        type="button"
                                        className="department-card"
                                        onClick={() => selectDepartment(department.id)}
                                    >
                                        <div className="department-icon">
                                            <i className={`bi ${department.icon}`}></i>
                                        </div>

                                        <h3>{department.name}</h3>

                                        <p>
                                            6 Semesters
                                        </p>

                                        <span className="card-action">
                      View Semesters
                      <i className="bi bi-arrow-right ms-2"></i>
                    </span>
                                    </button>
                                </div>
                            ))}

                        </div>
                    )}

                    {/* Semester Selection */}
                    {selectedDepartment && !selectedSemester && (
                        <>
                            <button
                                type="button"
                                className="back-button"
                                onClick={backToDepartments}
                            >
                                <i className="bi bi-arrow-left me-2"></i>
                                Back to Departments
                            </button>

                            <div className="selected-heading">
                                <div className="selected-heading-icon">
                                    <i className={`bi ${selectedDepartmentDetails?.icon}`}></i>
                                </div>

                                <div>
                                    <h3>{selectedDepartmentDetails?.name}</h3>
                                    <p>Select a semester to view subjects.</p>
                                </div>
                            </div>

                            <div className="row g-4 semester-grid">

                                {semesters.map(semester => (
                                    <div
                                        className="col-12 col-sm-6 col-lg-4"
                                        key={semester}
                                    >
                                        <button
                                            type="button"
                                            className="semester-card"
                                            onClick={() => selectSemester(semester)}
                                        >
                                            <div className="semester-number">
                                                {semester}
                                            </div>

                                            <div className="semester-info">
                                                <h4>Semester {semester}</h4>
                                                <p>5 Subjects</p>
                                            </div>

                                            <i className="bi bi-chevron-right semester-arrow"></i>
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </>
                    )}

                    {/* Subject Selection */}
                    {selectedDepartment && selectedSemester && !selectedSubject && (
                        <>
                            <button
                                type="button"
                                className="back-button"
                                onClick={backToSemesters}
                            >
                                <i className="bi bi-arrow-left me-2"></i>
                                Back to Semesters
                            </button>

                            <div className="selected-heading">
                                <div className="selected-heading-icon">
                                    <i className="bi bi-book-half"></i>
                                </div>

                                <div>
                                    <h3>
                                        {selectedDepartmentDetails?.shortName} - Semester {selectedSemester}
                                    </h3>

                                    <p>Select a subject to view study materials.</p>
                                </div>
                            </div>

                            <div className="row g-3 subject-grid">

                                {semesterSubjects.map(subject => (
                                    <div
                                        className="col-12 col-sm-6 col-lg-4"
                                        key={subject.id}
                                    >
                                        <button
                                            type="button"
                                            className="subject-card"
                                            onClick={() => selectSubject(subject.name)}
                                        >
                                            <div className="subject-icon">
                                                <i className="bi bi-journal-bookmark-fill"></i>
                                            </div>

                                            <div className="subject-info">
                                                <h4>{subject.name}</h4>
                                                <p>View Study Materials</p>
                                            </div>

                                            <i className="bi bi-chevron-right subject-arrow"></i>
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </>
                    )}

                    {/* Study Materials */}
                    {selectedDepartment && selectedSemester && selectedSubject && (
                        <>
                            <button
                                type="button"
                                className="back-button"
                                onClick={backToSubjects}
                            >
                                <i className="bi bi-arrow-left me-2"></i>
                                Back to Subjects
                            </button>

                            <div className="selected-heading">
                                <div className="selected-heading-icon">
                                    <i className="bi bi-journal-text"></i>
                                </div>

                                <div>
                                    <h3>{selectedSubject}</h3>

                                    <p>
                                        {selectedDepartmentDetails?.shortName} - Semester {selectedSemester}
                                    </p>
                                </div>
                            </div>

                            <div className="materials-container">

                                <div className="materials-heading">
                                    <h4>
                                        <i className="bi bi-folder2-open me-2"></i>
                                        Available Study Materials
                                    </h4>

                                    <span>{subjectMaterials.length} Files</span>
                                </div>

                                {subjectMaterials.length === 0 ? (
                                    <div className="empty-materials">
                                        <i className="bi bi-file-earmark-x"></i>

                                        <h4>No Study Materials Available</h4>

                                        <p>
                                            Study materials for this subject have not been added yet.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="row g-3">

                                        {subjectMaterials.map(material => (
                                            <div
                                                className="col-12 col-md-6"
                                                key={material.id}
                                            >
                                                <div className="material-card">

                                                    <div className="material-file-icon">
                                                        <i className="bi bi-file-earmark-pdf-fill"></i>
                                                    </div>

                                                    <div className="material-details">
                                                        <h5>{material.title}</h5>

                                                        <p>{material.fileName}</p>

                                                        <span className="material-type">
                              {material.fileType || 'PDF Document'}
                            </span>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        className="material-view-button"
                                                        onClick={() => setActiveMaterial(material)}
                                                        disabled={!material.previewUrl}
                                                    >
                                                        <i className="bi bi-eye me-1"></i>
                                                        View
                                                    </button>

                                                    {material.downloadUrl && (
                                                        <a
                                                            href={material.downloadUrl}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="material-download-button"
                                                            title="Download"
                                                        >
                                                            <i className="bi bi-download"></i>
                                                        </a>
                                                    )}

                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                )}

                            </div>
                        </>
                    )}

                </section>

                {/* PDF Preview */}
                {activeMaterial && (
                    <div className="pdf-modal-backdrop">
                        <div className="pdf-modal">

                            <div className="pdf-modal-header">
                                <div>
                                    <h4>{activeMaterial.title}</h4>
                                    <p>{activeMaterial.fileName}</p>
                                </div>

                                <button
                                    type="button"
                                    className="pdf-close-button"
                                    onClick={() => setActiveMaterial(null)}
                                    aria-label="Close PDF preview"
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </div>

                            <iframe
                                src={activeMaterial.previewUrl}
                                title={activeMaterial.title}
                                className="pdf-viewer"
                            />

                            <div className="pdf-modal-footer">
                                {activeMaterial.downloadUrl && (
                                    <a
                                        href={activeMaterial.downloadUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="download-pdf-button"
                                    >
                                        <i className="bi bi-download me-2"></i>
                                        Download PDF
                                    </a>
                                )}

                                <button
                                    type="button"
                                    className="close-preview-button"
                                    onClick={() => setActiveMaterial(null)}
                                >
                                    Close
                                </button>
                            </div>

                        </div>
                    </div>
                )}

            </main>

            {/* Footer */}
            <footer className="home-footer">
                <div className="container">
                    <p>
                        © {new Date().getFullYear()} Nalanda Foundations Polytechnic.
                        All Rights Reserved.
                    </p>
                    <span>Student Resource Hub</span>
                </div>
            </footer>

        </div>
    )
}

export default Home
