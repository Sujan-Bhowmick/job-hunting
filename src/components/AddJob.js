import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch } from 'react-redux';
import { createJobs } from '../features/job/jobSlice';

export default function AddJob() {
    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    const [type, setType] = useState("");
    const [deadline, setDeadline] = useState("");

    const dispatch = useDispatch() ;

    const reset = () => {
        setTitle("");
        setType("");
        setSalary("");
        setDeadline("")
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        dispatch(createJobs({
                title,
                salary,
                type, 
                deadline
        }))
        reset();
    }
    return (
        <>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="lg:pl-[14rem] mt-[5.8125rem]">
                <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                    <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>
                    <div className="max-w-3xl mx-auto">
                        <form
                        onSubmit={handleSubmit}
                         className="space-y-6">
                            <div className="fieldContainer">
                                <label for="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                                <select onChange={e => setTitle(e.target.value)} id="lws-JobTitle" name="lwsJobTitle" required>
                                    <option value= {title} hidden selected>Select Job</option>
                                    <option>Software Engineer</option>
                                    <option>Software Developer</option>
                                    <option>Full Stack Developer</option>
                                    <option>MERN Stack Developer</option>
                                    <option>DevOps Engineer</option>
                                    <option>QA Engineer</option>
                                    <option>Product Manager</option>
                                    <option>Social Media Manager</option>
                                    <option>Senior Executive</option>
                                    <option>Junior Executive</option>
                                    <option>Android App Developer</option>
                                    <option>IOS App Developer</option>
                                    <option>Frontend Developer</option>
                                    <option>Frontend Engineer</option>
                                </select>
                            </div>

                            <div className="fieldContainer">
                                <label for="lws-JobType">Job Type</label>
                                <select onChange={e => setType(e.target.value)} id="lws-JobType" name="lwsJobType" required>
                                    <option value={type} hidden selected>Select Job Type</option>
                                    <option>Full Time</option>
                                    <option>Internship</option>
                                    <option>Remote</option>
                                </select>
                            </div>

                            <div className="fieldContainer">
                                <label for="lws-JobSalary">Salary</label>
                                <div className="flex border rounded-md shadow-sm border-slate-600">
                                    <span className="input-tag">BDT</span>
                                    <input onChange={e => setSalary(e.target.value)} value={salary} type="number" name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                                        placeholder="your salary" />
                                </div>
                            </div>

                            <div className="fieldContainer">
                                <label for="lws-JobDeadline">Deadline</label>
                                <input onChange={e => setDeadline(e.target.value)} value={deadline} type="date" name="lwsJobDeadline" id="lws-JobDeadline" required />
                            </div>

                            <div className="text-right">
                                <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}
