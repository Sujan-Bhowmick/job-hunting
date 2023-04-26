import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { changeJobs } from '../features/job/jobSlice';
import { useNavigate } from 'react-router-dom';

export default function EditJob() {
    const { editing } = useSelector(state => state.job);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    const [type, setType] = useState("");
    const [deadline, setDeadline] = useState("");

    const reset = () => {
        setTitle("");
        setType("");
        setSalary("");
        setDeadline("")
    }

    // listen for edit mode active
    useEffect(() => {
        const { id, title, salary, type, deadline } = editing || {};
        if (id) {
            setTitle(title);
            setType(type);
            setSalary(salary);
            setDeadline(deadline)
        } else {
            reset();
        }
    }, [editing])

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(changeJobs({
            id: editing?.id,
            data: {
                title,
                type,
                salary,
                deadline
            }
        }))
        reset()
        navigate('/')
    }
    return (
        <>
            <div className="sidebar">
                <Sidebar />
            </div>

            <div className="lg:pl-[14rem] mt-[5.8125rem]">
                <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                    <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

                    <div className="max-w-3xl mx-auto">
                        <form onSubmit={handleUpdate} className="space-y-6">
                            <div className="fieldContainer">
                                <label for="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                                <select onChange={e => setTitle(e.target.value)} value={title} id="lws-JobTitle" name="lwsJobTitle" required>
                                    <option hidden selected>Select Job</option>
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
                                <select onChange={e => setType(e.target.value)} value={type} id="lws-JobType" name="lwsJobType" required>
                                    <option hidden selected>Select Job Type</option>
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
                                        placeholder="20,00,000" />
                                </div>
                            </div>

                            <div className="fieldContainer">
                                <label for="lws-JobDeadline">Deadline</label>
                                <input onChange={e => setDeadline(e.target.value)} value={deadline} type="date" name="lwsJobDeadline" id="lws-JobDeadline" required />
                            </div>

                            <div className="text-right">
                                    <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                                        Edit
                                    </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}
