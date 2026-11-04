import { useState } from 'react'
import Login from './Login'
import Home from './Home'
import FacultyUpload from './FacultyUpload'
import './App.css'
import collegeLogo from './assets/college-logo.png'

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

    if (selectedPage === 'home') return <Home />

    if (selectedPage === 'facultyUpload') return <FacultyUpload />

    return (


        <div className="min-vh-100 d-flex flex-column bg-light">

            {/* Header */}

            <header className="container-fluid bg-white shadow-sm py-3 px-4">
                <div className="row align-items-center">

                    {/* Left: College Logo */}
                    <div className="col-2 text-start">
                        <img
                            src={collegeLogo}
                            alt="College Logo"
                            className="img-fluid"
                            style={{
                                width: '70px',
                                height: '70px',
                                objectFit: 'contain'
                            }}
                        />
                    </div>

                    {/* Centre: College Name */}
                    <div className="col-8 text-center">
                        <h3 className="fw-bold text-primary mb-0">
                            NALANDA FOUNDATIONS POLYTECHNIC
                        </h3>
                    </div>

                    {/* Right: Contact Us */}
                    <div className="col-2 text-end">
                        <a href="#footer" className="btn btn-outline-primary btn-sm">
                            Contact Us
                        </a>
                    </div>

                </div>
            </header>


            {/* Main Content */}

            <main className="flex-grow-1 container d-flex align-items-center justify-content-center py-5">

                <div className="w-100" style={{ maxWidth: '650px' }}>

                    {/* First Card */}

                    {/* First Card - Welcome */}
                    <div className="card border-0 shadow rounded-4 p-4 p-md-5 text-center mb-4">

                        <h2 className="fw-bold text-primary mb-3">
                            Welcome to Nalanda Foundations Polytechnic
                        </h2>

                        <h5 className="fw-semibold text-dark mb-3">
                            Your Learning Journey Starts Here!
                        </h5>

                        <p className="text-secondary mb-3">
                            Access your academic resources, study materials and
                            learning support through our Student Portal.
                        </p>

                        <p className="text-secondary mb-4">
                            Explore learning resources, stay connected with your
                            institution and make your academic journey more productive.
                        </p>

                        <button
                            className="btn btn-primary btn-lg px-5"
                            onClick={() => setSelectedPage('nfp')}
                        >
                            <i className="bi bi-mortarboard-fill me-2"></i>
                            NFP Students Login
                        </button>

                    </div>


                    {/* Second Card */}
                    <div className="card border-0 shadow rounded-4 p-3 text-center">

                        <button
                            className="btn btn-link text-decoration-none text-dark fw-semibold"
                            onClick={() => setSelectedPage('other')}
                        >
                            Other College Students
                        </button>

                    </div>

                </div>

            </main>


            {/* Footer */}

            <footer className="bg-dark text-white pt-4 pb-3" id="footer">
                <div className="container">
                    <div className="row g-4">

                        {/* College Address */}
                        <div className="col-12 col-md-4">
                            <h6 className="fw-bold mb-3">
                                Nalanda Foundations Polytechnic
                            </h6>

                            <p className="text-white-50 mb-1">
                                <i className="bi bi-geo-alt-fill me-2 text-info"></i>
                                Vidyaranya, NH 63, Gadag Road, Bhandiwad,
                                Hubballi, Karnataka 580023
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="col-12 col-md-4">
                            <p className="mb-3">
                                <i className="bi bi-telephone-fill me-2 text-info"></i>
                                <a href="tel:7676938239"
                                   className="text-white-50 text-decoration-none">
                                    7676938239
                                </a>
                            </p>

                            <p className="mb-0">
                                <i className="bi bi-envelope-fill me-2 text-info"></i>
                                <a href="mailto:admin@nfptech.in"
                                   className="text-white-50 text-decoration-none">
                                    admin@nfptech.in
                                </a>
                            </p>
                        </div>

                        {/* Social Media and Faculty Upload */}
                        <div className="col-12 col-md-4">
                            <div className="d-flex flex-column gap-2">
                                <a href="#" className="text-white-50 text-decoration-none">
                                    <i className="bi bi-facebook me-2"></i>Facebook
                                </a>

                                <a href="#" className="text-white-50 text-decoration-none">
                                    <i className="bi bi-instagram me-2"></i>Instagram
                                </a>

                                <a href="#" className="text-white-50 text-decoration-none">
                                    <i className="bi bi-youtube me-2"></i>YouTube
                                </a>
                            </div>

                            <button
                                className="btn btn-outline-light btn-sm mt-3"
                                onClick={() => setSelectedPage('faculty')}
                            >
                                <i className="bi bi-person-badge me-2"></i>
                                Faculty Upload
                            </button>
                        </div>

                    </div>

                    <hr className="border-secondary my-4" />

                    <div className="text-center text-white-50 small">
                        © {new Date().getFullYear()} Nalanda Foundations Polytechnic.
                        All Rights Reserved.
                    </div>
                </div>
            </footer>


        </div>


    )
}

export default App
