import { useState } from 'react'

import Login from './Login'
import Home from './Home'
import FacultyUpload from './FacultyUpload'

import collegeLogo from './assets/college-logo.png'
import collegeVideo from './assets/college.mp4'

import './App.css'

function App() {
    const [selectedPage, setSelectedPage] = useState('landing')

    if (selectedPage === 'nfp') {
        return (
            <Login
                loginType="registration"
                onLoginSuccess={() => setSelectedPage('home')}
            />
        )
    }

    if (selectedPage === 'other') {
        return (
            <Login
                loginType="college"
                onLoginSuccess={() => setSelectedPage('home')}
            />
        )
    }

    if (selectedPage === 'faculty') {
        return (
            <Login
                loginType="faculty"
                onLoginSuccess={() => setSelectedPage('facultyUpload')}
            />
        )
    }

    if (selectedPage === 'home') {
        return <Home />
    }

    if (selectedPage === 'facultyUpload') {
        return <FacultyUpload />
    }

    return (
        <div className="d-flex flex-column min-vh-100">

            {/* Background Video */}
            <div className="background-video-container">
                <video autoPlay muted loop playsInline className="background-video">
                    <source src={collegeVideo} type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            {/* Header */}
            <header className="bg-white shadow-sm border-bottom border-3 border-warning py-3 position-relative">
                <div className="container-fluid px-4">
                    <div className="row align-items-center">

                        <div className="col-2">
                            <img
                                src={collegeLogo}
                                alt="Nalanda Foundations Polytechnic Logo"
                                className="img-fluid"
                                style={{ maxWidth: '75px', maxHeight: '75px' }}
                            />
                        </div>

                        <div className="col-8 text-center">
                            <h3 className="college-heading mb-0">
                                NALANDA FOUNDATIONS POLYTECHNIC
                            </h3>
                        </div>

                        <div className="col-2 text-end">
                            <a href="#footer" className="btn contact-button btn-sm">
                                <i className="bi bi-telephone-fill me-1"></i>
                                <span className="d-none d-md-inline">Contact Us</span>
                            </a>
                        </div>

                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow-1 position-relative">
                <div className="container py-4 py-md-5">

                    <section className="welcome-banner rounded-4 p-4 p-md-5 mb-4">
                        <span className="welcome-badge">STUDENT PORTAL</span>

                        <h1 className="mt-3">
                            Welcome to Nalanda Foundations Polytechnic
                        </h1>

                        <h5 className="fw-semibold mt-3">
                            Your Learning Journey Starts Here!
                        </h5>

                        <p className="welcome-description mt-3 mb-0">
                            Access your academic resources, study materials
                            and learning support through our student portal.
                            Explore educational resources and make your
                            academic journey more productive.
                        </p>
                    </section>

                    <section className="row justify-content-center g-4">
                        <div className="col-12 col-md-8">
                            <div className="student-card h-100">

                                <div className="student-icon">
                                    <i className="bi bi-mortarboard-fill"></i>
                                </div>

                                <h5 className="fw-bold mt-3">Students</h5>

                                <p>
                                    Access college learning materials,
                                    academic resources and study support.
                                </p>

                                <button
                                    type="button"
                                    className="btn student-primary-button"
                                    onClick={() => setSelectedPage('nfp')}
                                >
                                    Student Login
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </button>

                            </div>
                        </div>
                    </section>

                    <div className="d-flex justify-content-center mt-4">
                        <button
                            type="button"
                            className="btn student-outline-button"
                            onClick={() => setSelectedPage('other')}
                        >
                            Other College Students
                            <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer id="footer" className="college-footer py-4">
                <div className="container-fluid px-4">
                    <div className="row g-4">

                        <div className="col-12 col-md-3">
                            <h6 className="footer-heading">
                                Nalanda Foundations Polytechnic
                            </h6>
                            <p className="footer-text">
                                <i className="bi bi-geo-alt-fill footer-icon me-2"></i>
                                Vidyaranya, NH 63, Gadag Road, Bhandiwad,
                                Hubballi, Karnataka 580023
                            </p>
                        </div>

                        <div className="col-12 col-md-3 text-center">
                            <h6 className="footer-heading">Get in Touch</h6>
                            <p className="footer-text">
                                <i className="bi bi-telephone-fill footer-icon me-2"></i>
                                <a href="tel:7676938239">7676938239</a>
                            </p>
                            <p className="footer-text">
                                <i className="bi bi-envelope-fill footer-icon me-2"></i>
                                <a href="mailto:admin@nfptech.in">admin@nfptech.in</a>
                            </p>
                        </div>

                        <div className="col-12 col-md-3 text-center">
                            <h6 className="footer-heading">Faculty</h6>
                            <p className="footer-text">
                                Faculty members can upload learning materials
                                and academic resources.
                            </p>
                            <button
                                type="button"
                                className="btn faculty-button"
                                onClick={() => setSelectedPage('faculty')}
                            >
                                <i className="bi bi-person-badge me-2"></i>
                                Faculty Upload
                            </button>
                        </div>

                        <div className="col-12 col-md-3 text-center">
                            <h6 className="footer-heading">Connect With Us</h6>
                            <div className="d-flex justify-content-center gap-3">
                                <a href="#" className="social-icon" aria-label="Facebook">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="#" className="social-icon" aria-label="Instagram">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="#" className="social-icon" aria-label="YouTube">
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </div>
                        </div>

                    </div>

                    <hr className="footer-divider mt-4" />

                    <div className="text-center footer-bottom">
                        © 2026 Nalanda Foundations Polytechnic. All Rights Reserved.
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default App