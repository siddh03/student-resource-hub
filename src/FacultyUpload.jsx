import { useState } from 'react'
import './FacultyUpload.css'

function FacultyUpload() {
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [branch, setBranch] = useState('')
  const [semester, setSemester] = useState('')
  const [resourceType, setResourceType] = useState('Notes')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!file) {
      alert('Please select a resource file.')
      return
    }

    alert(`Connect to DataBase`)

  }

  const handleClear = () => {
    setTitle('')
    setSubject('')
    setBranch('')
    setSemester('')
    setResourceType('Notes')
    setDescription('')
    setFile(null)
  }

  return (
    <div className="container-fluid faculty-upload-page">

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <h2>Faculty Portal</h2>
          <p>
            Upload and manage study materials, notes and learning resources
            for students in one place.
          </p>
        </div>
      </section>

      <div className="container py-5 page-content">
        {/* Page Heading */}
        <div className="mb-4">
          <h2 className="faculty-page-title">
            Upload Study Resources
          </h2>

          <p className="faculty-page-description">
            Share notes, lab manuals, assignments, and question papers with students.
          </p>
        </div>

        {/* Upload Form */}
        <div className="row">
          <div className="col-12">
            <div className="card faculty-card">
              <div className="card-body p-4 p-md-5">
                <h5 className="fw-bold mb-4">
                  Resource Details
                </h5>

                <form onSubmit={handleSubmit}>
                  {/* Resource Title */}
                  <div className="mb-3">
                    <label htmlFor="resourceTitle" className="form-label">
                      Resource Title *
                    </label>

                    <input
                      id="resourceTitle"
                      type="text"
                      className="form-control"
                      placeholder="Example: Computer Networks Unit 1 Notes"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      required
                    />
                  </div>

                  {/* Department and Semester */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="department" className="form-label">
                        Department *
                      </label>

                      <select
                        id="department"
                        className="form-select"
                        value={branch}
                        onChange={(event) => setBranch(event.target.value)}
                        required
                      >
                        <option value="">Select Department</option>
                        <option value="CSE">Computer Science (CSE)</option>
                        <option value="ECE">Electronics (ECE)</option>
                        <option value="Civil">Civil Engineering</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="semester" className="form-label">
                        Semester *
                      </label>

                      <select
                        id="semester"
                        className="form-select"
                        value={semester}
                        onChange={(event) => setSemester(event.target.value)}
                        required
                      >
                        <option value="">Select Semester</option>
                        <option value="1">Semester 1</option>
                        <option value="2">Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject Name *
                    </label>

                    <input
                      id="subject"
                      type="text"
                      className="form-control"
                      placeholder="Enter subject name"
                      value={subject}
                      onChange={(event) => setSubject(event.target.value)}
                      required
                    />
                  </div>

                  {/* Resource Type */}
                  <div className="mb-3">
                    <label htmlFor="resourceType" className="form-label">
                      Resource Type *
                    </label>

                    <select
                      id="resourceType"
                      className="form-select"
                      value={resourceType}
                      onChange={(event) => setResourceType(event.target.value)}
                    >
                      <option>Notes</option>
                      <option>Question Bank</option>
                      <option>Lab Manual</option>
                      <option>Assignment</option>
                      <option>Question Paper</option>
                      <option>Presentation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>

                    <textarea
                      id="description"
                      className="form-control"
                      rows="3"
                      placeholder="Briefly describe the resource..."
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    />
                  </div>

                  {/* File Upload */}
                  <div className="mb-4">
                    <label htmlFor="resourceFile" className="form-label">
                      Select Resource File *
                    </label>

                    <input
                      id="resourceFile"
                      type="file"
                      className="form-control"
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png"
                      onChange={(event) =>
                        setFile(event.target.files[0] || null)
                      }
                      required
                    />

                    <small className="text-secondary">
                      Accepted formats: PDF, Word, PowerPoint, and images.
                    </small>
                  </div>

                  {/* Selected File */}
                  {file && (
                    <div className="alert alert-info">
                      Selected file: <strong>{file.name}</strong>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="d-flex flex-wrap gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary px-4"
                    >
                      Upload Resource
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary px-4"
                      onClick={handleClear}
                    >
                      Clear Form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacultyUpload