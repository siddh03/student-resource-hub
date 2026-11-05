
import { useState } from 'react'

import Login from './Login'
import Home from './Home'
import FacultyUpload from './FacultyUpload'

import collegeLogo from './assets/college-logo.png'
import collegeVideo from './assets/college.mp4'

import './App.css'

// Start background video
const startVideo = (el) => {
    if (el) {
        el.muted = true
        el.play().catch(() => {})
    }
}

function App() {
    const [selectedPage, setSelectedPage] = useState('landing')

    // NFP Student Login
    if (selectedPage === 'nfp') {
        return (
            <Login
                loginType="registration"
                onLoginSuccess={() => setSelectedPage('home')}
            />
        )
    }

    // Other College Student Login
    if (selectedPage === 'other') {
        return (
            <Login
                loginType="college"
                onLoginSuccess={() => setSelectedPage('home')}
            />
        )
    }

    // Faculty Login
    if (selectedPage === 'faculty') {
        return (
            <Login
                loginType="faculty"
                onLoginSuccess={() => setSelectedPage('facultyUpload')}
            />
        )
    }

    // Student Home Page
    if (selectedPage === 'home') {
        return <Home />
    }

    // Faculty Upload Page
    if (selectedPage === 'facultyUpload') {
        return <FacultyUpload />
    }

    return (
        <div className="d-flex flex-column min-vh-100">

            {/* Background Video */}
            <div
                className="background-video-container"
                aria-hidden="true"
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="background-video"
                    ref={startVideo}
                >
                    <source src={collegeVideo} type="video/mp4" />
                </video>

                <div className="video-overlay"></div>
            </div>

            {/* Header */}
            <header className="site-header sticky-top py-2">
                <div className="container d-flex align-items-center gap-3">

                    {/* College Logo */}
                    <img
                        src={collegeLogo}
                        alt="Nalanda Foundations Polytechnic logo"
                        className="logo"
                    />

                    {/* College Name */}
                    <div className="flex-grow-1">
                        <h1 className="college-heading">
                            NALANDA FOUNDATIONS POLYTECHNIC
                        </h1>

                        <p className="college-subheading">
                            AICTE Approved | Govt. Recognized | DTE Affiliated
                        </p>
                    </div>

                    {/* Contact Button */}
                    <a
                        href="#footer"
                        className="btn contact-button"
                        aria-label="Contact Us"
                    >
                        <i className="bi bi-telephone-fill me-md-2"></i>
                        <span className="d-none d-md-inline">
                            Contact Us
                        </span>
                    </a>

                </div>
            </header>

            {/* Main Content */}
            <main className="hero flex-grow-1">

                <div className="container py-5">

                    {/* Welcome Section */}
                    <section className="hero-content text-center mb-5">

                        <span className="hero-badge">
                            STUDENT PORTAL
                        </span>

                        <h1 className="mt-4">
                            Welcome to Nalanda Foundations Polytechnic
                        </h1>

                        <p className="hero-tagline mt-3 mb-2">
                            Your Learning Journey Starts Here!
                        </p>

                        <p className="hero-description mb-0">
                            Access your academic resources, study materials
                            and learning support through our student portal.
                            Explore educational resources and make your
                            academic journey more productive.
                        </p>

                    </section>

                    {/* NFP Student Card */}
                    <section className="row justify-content-center">

                        <div className="col-12 col-md-8 col-lg-8">

                            <div className="student-card h-100">

                                <div className="student-icon">
                                    <i className="bi bi-mortarboard-fill"></i>
                                </div>

                                <h5 className="fw-bold m-3">
                                    Access college learning materials,
                                    academic resources and study support.
                                </h5>

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

                    {/* Other College Students Button */}
                    <div className="d-flex justify-content-center mt-4">

                        <button
                            type="button"
                            className="btn student-outline-button"
                            onClick={() => setSelectedPage('other')}
                        >
                            <i className="bi bi-building me-2"></i>
                            Other College Students
                            <i className="bi bi-arrow-right ms-2"></i>
                        </button>

                    </div>

                </div>

            </main>

            {/* Footer */}
            <footer id="footer" className="college-footer pt-5 pb-3">

                <div className="container">

                    <div className="row g-4 text-center">

                        {/* College Details */}
                        <div className="col-12 col-md-3">

                            <h3 className="footer-heading">
                                Nalanda Foundations Polytechnic
                            </h3>

                            <p className="footer-text">
                                <i className="bi bi-geo-alt-fill footer-icon me-2"></i>
                                Vidyaranya, NH 63, Gadag Road, Bhandiwad,
                                Hubballi, Karnataka 580023
                            </p>

                        </div>

                        {/* Contact Details */}
                        <div className="col-12 col-md-3">

                            <h3 className="footer-heading">
                                Get in Touch
                            </h3>

                            <p className="footer-text">
                                <i className="bi bi-telephone-fill footer-icon me-2"></i>
                                <a href="tel:7676938239">
                                    7676938239
                                </a>
                            </p>

                            <p className="footer-text">
                                <i className="bi bi-envelope-fill footer-icon me-2"></i>
                                <a href="mailto:admin@nfptech.in">
                                    admin@nfptech.in
                                </a>
                            </p>

                        </div>

                        {/* Faculty Section */}
                        <div className="col-12 col-md-3">

                            <h3 className="footer-heading">
                                Faculty
                            </h3>

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

                        {/* Social Media */}
                        <div className="col-12 col-md-3">

                            <h3 className="footer-heading">
                                Connect With Us
                            </h3>

                            <div className="d-flex justify-content-center gap-3">

                                <a
                                    href="#"
                                    className="social-icon"
                                    aria-label="Facebook"
                                    title="Facebook"
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>

                                <a
                                    href="#"
                                    className="social-icon"
                                    aria-label="Instagram"
                                    title="Instagram"
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>

                                <a
                                    href="#"
                                    className="social-icon"
                                    aria-label="YouTube"
                                    title="YouTube"
                                >
                                    <i className="bi bi-youtube"></i>
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* Footer Divider */}
                    <hr className="footer-divider mt-4" />

                    {/* Copyright */}
                    <div className="text-center footer-bottom">
                        © {new Date().getFullYear()} Nalanda Foundations Polytechnic.
                        All Rights Reserved.
                    </div>

                </div>

            </footer>

        </div>
    )
}

export default App
