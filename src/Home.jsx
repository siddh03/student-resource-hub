import { useEffect, useState } from 'react'
import './Home.css'

function Home() {
    const [resources, setResources] = useState([])

    useEffect(() => {
        const savedResources = JSON.parse(
            localStorage.getItem('resources') || '[]'
        )

        setResources(savedResources)
    }, [])

    return (
        <div className="home-page">

            {/* Navigation Bar */}
            <nav className="navbar navbar-dark home-navbar">
                <div className="container">
                    <span className="navbar-brand">
                        Student Resource Hub
                    </span>

                    <span className="navbar-text">
                        Learning Resources
                    </span>
                </div>
            </nav>

            <div className="container py-5">

                {/* Welcome Section */}
                <div className="home-banner mb-5">
                    <h1>
                        Welcome to Student Resource Hub
                    </h1>

                    <p>
                        Access study materials, notes, lab manuals,
                        assignments and question papers in one place.
                    </p>
                </div>

                {/* Resource Heading */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h3 className="resource-heading mb-1">
                            Study Resources
                        </h3>

                        <p className="resource-subtitle mb-0">
                            Browse learning materials uploaded by faculty.
                        </p>
                    </div>

                    <span className="badge bg-primary fs-6 px-3 py-2">
                        {resources.length} Resources
                    </span>
                </div>

                {/* Resource Cards */}
                <div className="row g-4">

                    {resources.length === 0 ? (
                        <div className="col-12">
                            <div className="empty-resources">
                                <div className="display-4 mb-3">
                                    📚
                                </div>

                                <h5 className="fw-bold">
                                    No Resources Available
                                </h5>

                                <p className="text-secondary mb-0">
                                    Study materials will appear here
                                    when they are uploaded by faculty.
                                </p>
                            </div>
                        </div>
                    ) : (
                        resources.map((resource) => (
                            <div
                                className="col-sm-6 col-lg-4"
                                key={resource.id}
                            >
                                <div className="card h-100 resource-card">
                                    <div className="card-body">

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="resource-type">
                                                {resource.resourceType}
                                            </span>

                                            <small className="text-secondary">
                                                {resource.uploadedAt}
                                            </small>
                                        </div>

                                        <h5 className="card-title mb-2">
                                            {resource.title}
                                        </h5>

                                        <p className="text-secondary mb-3">
                                            {resource.subject}
                                        </p>

                                        <hr />

                                        <div className="mb-3">
                                            <div className="resource-detail-label">
                                                Department
                                            </div>

                                            <div className="resource-detail-value">
                                                {resource.branch}
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="resource-detail-label">
                                                Semester
                                            </div>

                                            <div className="resource-detail-value">
                                                Semester {resource.semester}
                                            </div>
                                        </div>

                                        {resource.description && (
                                            <p className="text-secondary small">
                                                {resource.description}
                                            </p>
                                        )}

                                        <div className="resource-file">
                                            <div className="resource-detail-label">
                                                Resource File
                                            </div>

                                            <div className="resource-detail-value">
                                                📄 {resource.fileName}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                </div>
            </div>

            {/* Footer */}
            <footer className="home-footer mt-5">
                <div className="container text-center">
                    © 2026 Student Resource Hub. All Rights Reserved.
                </div>
            </footer>

        </div>
    )
}

export default Home