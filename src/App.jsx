import { useState } from 'react'
import './App.css'

import Login from './Login'
import Home from './Home'
import FacultyUpload from './FacultyUpload'

function App() {
    const [selectedPage, setSelectedPage] = useState('')

    // NFP Students Login
    if (selectedPage === 'nfp') {
        return (
            <Login
                loginType="registration"
                onLoginSuccess={() => setSelectedPage('home')}
            />
        )
    }

    // Other College Students Login
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

    // Home Page
    if (selectedPage === 'home') {
        return <Home />
    }

    // Faculty Upload Page
    if (selectedPage === 'facultyUpload') {
        return <FacultyUpload />
    }

    // Main Landing Page
    return (
        <div className="app-home">
            <nav className="navbar app-navbar">
                <div className="container">
                    <span className="navbar-brand">
                        Student Resource Hub
                    </span>
                </div>
            </nav>

            <div className="container">
                <div className="app-welcome text-center">
                    <h1>Welcome to Student Resource Hub</h1>

                    <p>
                        Your one-stop platform for accessing
                        academic resources and study materials.
                    </p>
                </div>

                <div className="row justify-content-center g-4">

                    {/* NFP Students */}
                    <div className="col-md-6 col-lg-4">
                        <div className="app-option-card">
                            <div className="app-option-icon">🎓</div>

                            <h4>NFP Students</h4>

                            <p>
                                Access study materials and academic
                                resources for NFP students.
                            </p>

                            <button
                                className="btn app-option-btn"
                                onClick={() => setSelectedPage('nfp')}
                            >
                                Continue
                            </button>
                        </div>
                    </div>

                    {/* Other College Students */}
                    <div className="col-md-6 col-lg-4">
                        <div className="app-option-card">
                            <div className="app-option-icon">🏫</div>

                            <h4>Other College Students</h4>

                            <p>
                                Access available study resources
                                using your college name.
                            </p>

                            <button
                                className="btn app-option-btn"
                                onClick={() => setSelectedPage('other')}
                            >
                                Continue
                            </button>
                        </div>
                    </div>

                    {/* Faculty Upload */}
                    <div className="col-md-6 col-lg-4">
                        <div className="app-option-card">
                            <div className="app-option-icon">👨‍🏫</div>

                            <h4>Faculty Upload</h4>

                            <p>
                                Upload notes, lab manuals,
                                assignments and question papers.
                            </p>

                            <button
                                className="btn app-option-btn"
                                onClick={() => setSelectedPage('faculty')}
                            >
                                Continue
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <footer className="app-footer">
                <div className="container text-center">
                    © 2026 Student Resource Hub. All Rights Reserved.
                </div>
            </footer>
        </div>
    )
}

export default App
