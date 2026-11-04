import { useState } from 'react'
import './Login.css'

// Power Automate HTTP POST URL
const POWER_AUTOMATE_URL = 'https://defaultc4530a3d85da42bebf588649924579.90.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/04/workflows/2671274425f646baaffcd2d64c164b3a/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=L2EGYSFKOqWamLgyPW53o2TkM7YvZ0FC6v7RFva73zI'

function Login({ loginType, onLoginSuccess }) {
    const [userId, setUserId] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const loginDetails = {
        registration: {
            title: 'NFP Student Login',
            label: 'Registration Number',
            placeholder: 'Enter your registration number'
        },
        college: {
            title: 'Other College Student Login',
            label: 'College Name',
            placeholder: 'Enter your college name'
        },
        faculty: {
            title: 'Faculty Login',
            label: 'Faculty Registration Number',
            placeholder: 'Enter your faculty registration number'
        }
    }

    const details = loginDetails[loginType]

    const handleLogin = async (e) => {
        e.preventDefault()
        setError('')

        if (!userId.trim()) {
            setError(`Please enter your ${details.label.toLowerCase()}`)
            return
        }

        // Other College Student Login
        if (loginType === 'college') {

            if (
                POWER_AUTOMATE_URL ===
                'PASTE_YOUR_COMPLETE_POWER_AUTOMATE_URL_HERE'
            ) {
                setError('Please configure your Power Automate URL.')
                return
            }

            try {
                setLoading(true)

                const response = await fetch(POWER_AUTOMATE_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        collegeName: userId.trim()
                    })
                })

                if (!response.ok) {
                    throw new Error('Unable to save login details.')
                }

                // Navigate to Home after successful response
                onLoginSuccess()

            } catch (err) {
                console.error('Power Automate Error:', err)

                setError(
                    'Unable to connect to the server. Please try again.'
                )

            } finally {
                setLoading(false)
            }

            return
        }

        // NFP Student and Faculty Login
        onLoginSuccess()
    }

    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-icon">🎓</div>

                <h2>Student Resource Hub</h2>

                <h4>{details.title}</h4>

                <p className="login-description">
                    Enter your details to access academic resources.
                </p>

                <form onSubmit={handleLogin}>

                    <div className="mb-4 text-start">

                        <label className="form-label">
                            {details.label}
                        </label>

                        <input
                            type="text"
                            className="form-control login-input"
                            placeholder={details.placeholder}
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            disabled={loading}
                        />

                    </div>

                    {error && (
                        <div className="alert alert-danger py-2">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn login-btn w-100"
                        disabled={loading}
                    >
                        {loading ? 'Please wait...' : 'Login'}
                    </button>

                </form>

                <div className="login-footer">
                    © 2026 Student Resource Hub
                </div>

            </div>

        </div>
    )
}

export default Login
