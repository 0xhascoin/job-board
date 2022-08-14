
import { BsBookmark } from 'react-icons/bs'

const ViewJob = ({ selectedJob }) => {
    return (
        <div className="view-job-container">
            <div className="job-header">
                <div className="header-left">
                    <div className="logo">
                        <img src={selectedJob?.logo} alt="" />
                    </div>
                    <div className="titles">
                        <p className="job-title">{selectedJob?.title}</p>
                    </div>
                </div>
                <div className="header-right">

                    <div className="save">
                        <button className="button">
                            <BsBookmark />
                        </button>
                    </div>
                </div>
            </div>
            <div className="job-description">
                <h2 className="heading">Company Description</h2>
                <p>{selectedJob?.companyDesc}</p>
            </div>
            <div className="job-description">
                <h2 className="heading mb-5">Job Description</h2>
                {selectedJob?.jobDesc?.map(({ heading, text }, key) => (
                    <div key={key}>
                    <h2 className="heading">{heading}</h2>
                    <p>{text}</p>
                    </div>
                ))}
            </div>

            <div className="skills-container">
                <h2 className="heading">Skills Required</h2>
                <span className="tag">UI Designer</span>
                <span className="tag">Figma</span>
                <span className="tag">Landing Page</span>
            </div>
        </div>
    )
}

export default ViewJob;