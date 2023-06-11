import "./resume.scss"

export default function Resume() {
  return (
    <div className="resume" id="resume">
      <h1>Resume</h1>
      <div className="container">
      <iframe
        title="resume"
        className="resWindow"
        src="assets/resume.pdf"
        width="100%"
        height="450px"
      >
      </iframe>
      < a href="https://docs.google.com/document/d/1HC4FQzLU-04HHc5WHt9LbhjM0ZTjbCbfhigZ_CpCLbE/edit?usp=sharing">
        <button>Open in Google Docs</button>
        </a>
    </div>
      </div>
  )
}
