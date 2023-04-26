import React, { useEffect } from 'react'
import SingleJob from './SingleJob'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../features/job/jobSlice';
import SearchSort from './SearchSort';

export default function AllJob() {

    // const searchResult = useSelector(state => state.job.search)
    // console.log(searchResult)

    // const salaries = useSelector(state => state.job.salary)
    // const {lth, htl} = salaries
    // console.log(salaries)

    const { isLoading, isError, jobs } = useSelector(state => state?.job);
    const filters = useSelector(state => state.filters)

    console.log(jobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    // filter by type
    const filterByType = (job) => {
        const {filter} = filters;
        switch (filter) {
            case "Internship":
            return job.type.toLowerCase() === "internship";
            case "Fulltime":
            return job.type.toLowerCase() === "fulltime";
            case "Remote":
            return job.type.toLowerCase() === "remote";
            default:
                return true;
        }
    }

    // filter by search
    const filterBySearchText = (job) => {
        const {search} = filters;
        if(search){
            console.log(search)
            return job.title.toLowerCase().includes(search.toLowerCase())
        }else{
            return true;
        }
    };

    // sort
    const sortJob = (jobs) => {
        const {sort} = filters;
        if(sort) {
            if(sort === "lth"){
                 // ascending
                 return jobs.sort((a, b) => a.salary - b.salary);
            }else if(sort === "htl"){
                // decending 
                return jobs.sort((a, b) => b.salary - a.salary) 
            }
           
        }else{
            return jobs
        }
    };

    let content = null;
    if (isLoading && !isError) content = <p>Loading...</p>
    if (!isLoading && isError) content = <p className="error">There is an error</p>
    if (!isLoading && !isError && jobs.length > 0) {
        content = jobs?.map(job => <SingleJob job={job} key={job.id} />)
    }
    if (!isLoading && !isError && jobs.length > 0) {
        // filter
        const jobsToShow = sortJob(jobs.filter(filterByType).filter(filterBySearchText)
        )
        content = jobsToShow.map((job) => <SingleJob job={job} key={job.id} />)
    }

    
    // if (!isLoading && !isError && jobs.length > 0 && searchResult) {
    //     content = jobs?.filter(job => job.title.toLowerCase().includes(searchResult))
    //         .map(job => <SingleJob job={job} key={job.id} />)
    // }

    // if(!isLoading && !isError && jobs.length > 0 && salaries ===htl ) {
    //     content = jobs.sort((a, b ) =>a.salary - b.salary)
    //     .map(job => <SingleJob job= {job} key={job.id}/>)
    // }


    // if(!isLoading && !isError && jobs.length > 0 && salaries ===lth ) {
    //     content = jobs.sort((a, b ) =>b.salary - a.salary)
    //     .map(job => <SingleJob job= {job} key={job.id}/>)
    // }

    return (
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                    <h1 className="lws-section-title">All Available Jobs</h1>
                    <SearchSort />
                </div>

                <div className="jobs-list">
                    {content}
                </div>
            </main>
        </div>
    )
}
