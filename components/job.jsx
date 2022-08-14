
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md'
import { BsBookmark } from 'react-icons/bs'
import moment from 'moment';

const Job = ({ data, job, setSelectedJob, selectedJob }) => {

    return (
        <div className={selectedJob == job ? "job-container selected" : "job-container"} onClick={() => setSelectedJob(data[data.indexOf(job)])}>
            <div className="job-header">
                <div className="header-left">
                <div className="logo">
                    <img src={job.logo} alt="" />
                </div>
                <div className="titles">
                    <p className="job-title">{job.title}</p>
                    <p className="company-name">{job.name}</p>
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
            <div className="tags-container">
                <span className="tag">{job.jobLength}</span>
                <span className="tag">{job.jobLevel} Level</span>
                <span className="tag is-primary is-light">${job.jobSalary}</span>
            </div>
            <div className="desc-container">
                {job.companyDesc.slice(0,100)}...
                
            </div>
            <div className="job-footer">
                <div className="button">View Job</div>
                <p>{moment(job.postedAt).fromNow()}</p>
            </div>
        </div>
    )
};

export default Job;