# Student Resource Hub

A web-based platform for students to access academic study materials and
for faculty members to upload and manage learning resources.

## Project Overview

Student Resource Hub is a React application developed for a polytechnic
college. It provides a central place for students to find study
materials organized by department, semester, and subject.

The application includes separate login flows for students and faculty.
Faculty members can access the Faculty Portal to upload learning
resources.

The project also plans to support students from other colleges and
record their college details in Microsoft Excel using Microsoft Power
Automate.

## Features

### Student Portal

-   Browse resources by department.
-   Select a semester and subject.
-   Download available study materials.
-   Access Word documents (`.docx`) through download links.

### Faculty Portal

-   Access a separate faculty login.
-   Upload study materials.
-   Enter resource titles and file details.

### Other College Student Registration

-   Allow students from other colleges to register or submit their
    details.
-   Collect the college name.
-   Send the submitted details to a Microsoft Power Automate flow.
-   Use Power Automate to add each submission as a new row in a
    Microsoft Excel table.

**Implementation status:** This is a planned integration. The React
form, Power Automate flow, and Excel connection must be configured
before the feature becomes operational.

### User Access

-   Separate login flows for available user categories.
-   Navigation between the landing page, student Home page, and Faculty
    Upload page.

## Technology Stack

-   **Frontend:** React
-   **Language:** JavaScript (JSX)
-   **Styling:** CSS
-   **UI Framework:** Bootstrap
-   **Icons:** Bootstrap Icons
-   **Automation and integration (planned):** Microsoft Power Automate
-   **Data recording (planned):** Microsoft Excel with OneDrive for
    Business or SharePoint
-   **Development Environment:** WebStorm
-   **AI-assisted development:** ChatGPT

## Project Structure

student-resource-hub/
├── src/
│   ├── assets/
│   │   ├── college-logo.png
│   │   └── college.mp4
│   ├── App.jsx
│   ├── App.css
│   ├── Login.jsx
│   ├── Login.css
│   ├── Home.jsx
│   ├── Home.css
│   ├── FacultyUpload.jsx
│   ├── FacultyUpload.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md

*This shows the main application files. Additional configuration files
may be present.*

## Theme and Styling

The shared theme is defined in `src/index.css`.

-   **Primary:** Orange (`#F28C28`)
-   **Primary dark:** `#D9741A`
-   **Secondary:** Navy blue (`#172554`)
-   **Background:** Cream (`#FFF9F1`)

Page-specific styles are maintained separately:

-   `App.css` -- Landing page and application layout
-   `Home.css` -- Student Home page
-   `Login.css` -- Login pages
-   `FacultyUpload.css` -- Faculty upload page
-   `index.css` -- Global theme variables and global reset

## AI-Assisted Development

ChatGPT was used as an AI-assisted development tool during the
development of Student Resource Hub.

It helped with: - Writing and refining React components using JavaScript
and JSX. - Creating and improving CSS styles for the landing page, login
pages, student page, and faculty portal. - Applying a consistent orange,
navy-blue, and cream colour theme across the application. - Suggesting
Bootstrap classes and responsive design improvements. - Explaining code,
identifying possible issues, and suggesting debugging steps. - Preparing
project documentation and README content. - Providing guidance for the
planned Microsoft Power Automate and Excel integration.

**Note:** ChatGPT provided development assistance and code suggestions.
The project developer is responsible for reviewing, testing, adapting,
and maintaining the code. AI-generated suggestions should be verified
before use in production.

## Other College Student Data Flow (Planned)

The intended integration uses the following process:

1.  A student from another college submits their details through a
    registration form in Student Resource Hub.
2.  The form collects the student's name, email address, and college
    name.
3.  The React application sends the submitted data to a Microsoft Power
    Automate flow using a configured HTTP endpoint or another supported
    trigger.
4.  Power Automate processes the submission.
5.  Power Automate uses the Excel Online (Business) connector to add a
    new row to an Excel table.
6.  The Excel workbook is stored in OneDrive for Business or SharePoint.

### Suggested Excel Table Columns

  -------------------------------------------------------------------
   College Name      Registration Date       Registration Time 
  ----------------- ---------------------- ---------------------------    
 
  --------------------------------------------------------------------

### Power Automate Setup Requirements

-   Create an Excel workbook in OneDrive for Business or SharePoint.
-   Format the student data range as an Excel table.
-   Create a Power Automate flow with a suitable trigger to receive the
    registration data.
-   Add an Excel Online (Business) action: **Add a row into a table**.
-   Map the incoming student name, email address, college name, and
    registration date to the corresponding Excel columns.
-   Configure the React application to submit data to the flow endpoint.
-   Protect the flow endpoint and validate submitted data. Avoid
    exposing secrets or privileged credentials in frontend code.

## Installation and Setup

### Prerequisites

-   Node.js
-   npm
-   Git

### 1. Clone the repository

git clone https://github.com/siddh03/student-resource-hub.git

### 2. Open the project folder

cd student-resource-hub

### 3. Install dependencies

npm install

### 4. Start the development server

npm run dev

Open the local URL displayed in the terminal.

## Adding Study Materials

The student Home page currently uses a `studyMaterials` data array in
`Home.jsx`.

Add a resource entry using the existing data structure:

{
    id: 1,
    department: 'CS',
    semester: 1,
    subject: 'Subject 1',
    title: 'Programming Notes',
    fileName: 'Programming Notes.docx',
    fileType: 'WORD',
    downloadUrl: 'YOUR_DOWNLOAD_LINK'
}

Replace `YOUR_DOWNLOAD_LINK` with a valid file download or sharing link.
Ensure that students have permission to access the file.

## Important Notes

-   The current student resource list is defined in `Home.jsx`.
-   Faculty uploads currently use browser `localStorage`.
-   The static `studyMaterials` array and faculty-uploaded resources are
    not automatically synchronized.
-   The Microsoft Power Automate and Excel integration described above
    is planned and requires configuration.
-   A shared database and backend API are needed for persistent resource
    management across users and devices.
-   Do not commit passwords, API keys, private tokens, or other
    credentials to the repository.

## Repository

[GitHub -- Student Resource
Hub](https://github.com/siddh03/student-resource-hub)

## Future Enhancements

-   Connect faculty uploads to the student resource listing.
-   Implement other-college student registration.
-   Integrate Microsoft Power Automate with Excel for recording student
    and college details.
-   Add backend APIs and database storage.
-   Add faculty authentication and role-based access control.
-   Add resource search and filtering.
-   Add upload validation and file-size restrictions.
-   Add administrative resource management.

## License

Add the appropriate license information before distributing or reusing
this project.
