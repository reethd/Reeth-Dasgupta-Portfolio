import "./resume.scss"

export default function Resume() {
  return (
    <div className="resume" id="resume">
      <h1>Resume</h1>
      <div className="container">
      <iframe
        title="resume"
        className="resWindow"
        src="../assets/resume.pdf"
        width="100%"
        height="450px"
      >
      </iframe>
    </div>
      </div>
  )
}
