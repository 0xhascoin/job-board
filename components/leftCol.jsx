import { useState } from 'react'
import Job from './job';

const LeftCol = ({ data, setSelectedJob, selectedJob, sortByFeatured, displayJobs, sortByMostRecent, selectedFilter, setSelectedFilter, sortByBestMatch }) => {



    return (
        <div className="left-col-container">
            <div className="filter-container">
                <button className={selectedFilter === 1 ? "button selected" : "button"} onClick={sortByBestMatch}>Best Matches</button>
                <button className={selectedFilter === 2 ? "button selected" : "button"} onClick={sortByFeatured}>Featured</button>
                <button className={selectedFilter === 3 ? "button selected" : "button"} onClick={sortByMostRecent}>Most Recent</button>
            </div>
            <div className="job-count">
                {displayJobs.length} Jobs Found
            </div>
            {data.map((job, key) => (
                <Job key={key} data={displayJobs} job={job} setSelectedJob={setSelectedJob} selectedJob={selectedJob} />
            ))}
        </div>
    )
}
export default LeftCol;