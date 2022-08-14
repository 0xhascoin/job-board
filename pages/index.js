import { useState, useEffect } from 'react';
import Header from "../components/header";
import LeftCol from "../components/leftCol";
import RightCol from "../components/rightCol";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebaseConfig';



const Home = () => {

  const [selectedJob, setSelectedJob] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [data, setData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(1);


  useEffect(() => {
    getAllJobsInFirestore();
  }, [])
  
  const getAllJobsInFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "jobs"));
    let tempArray = [];
    querySnapshot.forEach((doc) => {
      tempArray.push(doc.data());
      // console.log(doc.id, " => ", doc.data());
    });
    setData(tempArray);
    setSelectedJob(tempArray[0]);
    setDisplayJobs(tempArray);
  }
  
  const addAllJobs = async (i) => {
    
    const docRef = await addDoc(collection(db, "jobs"), {...d[i], timestamp: serverTimestamp()});
    console.log("Document written with ID: ", docRef.id);
  }

  const sortByMostRecent = () => {
    setSelectedFilter(3)
    let sortedArr = [...displayJobs];
    sortedArr = sortedArr.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.timestamp.seconds) - new Date(a.timestamp.seconds);
    });
    console.log("Sorted Arr: ", sortedArr);
    setDisplayJobs(sortedArr);
    setSelectedJob(sortedArr[0])
  }

  const sortByBestMatch = () => {
    setSelectedFilter(1);
    setDisplayJobs(data);
    setSelectedJob(data[0])
  }

  const sortByFeatured = () => {
    setSelectedFilter(2)
    let sortedArr = [...displayJobs];
    sortedArr = sortedArr.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return parseInt(b.jobSalary) - parseInt(a.jobSalary);
    });
    console.log("Sorted Arr: ", sortedArr);
    setDisplayJobs(sortedArr);
    setSelectedJob(sortedArr[0])
    // console.log(data[0].jobSalary > data[1].jobSalary)
  }

  return (
    <div className="home">
      <Header />
      <div className="columns">
        <div className="left-col column is-5">
          {displayJobs && <LeftCol sortByFeatured={sortByFeatured} sortByBestMatch={sortByBestMatch} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} sortByMostRecent={sortByMostRecent} setSelectedJob={setSelectedJob} data={displayJobs} selectedJob={selectedJob} displayJobs={displayJobs} /> }
        </div>
        <div className="right-col column">
         {displayJobs && <RightCol setSelectedJob={setSelectedJob} selectedJob={selectedJob} setDisplayJobs={setDisplayJobs} data={data} /> }
        </div>
      </div>
    </div>
  )
};

export default Home;