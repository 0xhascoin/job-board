import { BiSearch } from 'react-icons/bi'
import ViewJob from './viewJob';
import { useState } from 'react';

const RightCol = ({ selectedJob, setSelectedJob, setDisplayJobs, data }) => {
    const [searchText, setSearchText] = useState("");

    const searchByText = (text) => {
        let tempArray = data;
        tempArray = tempArray.filter((job) => job.title.toLowerCase().includes(text.toLowerCase()) || job.name.toLowerCase().includes(text.toLowerCase()) || job.jobLevel.toLowerCase().includes(text.toLowerCase()) || job.jobLength.toLowerCase().includes(text.toLowerCase()) || job.companyDesc.toLowerCase().includes(text.toLowerCase()));
        console.log(tempArray)
        setDisplayJobs(tempArray);
        if(tempArray.length > 0) {
            setSelectedJob(tempArray[0])
        }
    }

    return (
        <div className="right-col-container">
            <div className="search-container">
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Search by job title" 
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)}/>
                <button className="button" onClick={() => searchByText(searchText)}><BiSearch /></button>
            </div>
            <ViewJob selectedJob={selectedJob} />
        </div>
    )
};

export default RightCol;