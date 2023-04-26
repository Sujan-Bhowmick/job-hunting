import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateFilters } from '../features/filters/filtersSlice';

export default function Sidebar() {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateFilters({filter}));
  }, [filter, dispatch])
  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
      <nav>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setFilter("")}
              className="main-menu menu-active" id="lws-alljobs-menu"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </button>

            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <button
                onClick={() => setFilter("Internship")}
                  className="sub-menu" to="/jobs/internship" id="lws-internship-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </button>
              </li>
              <li>
                <button
                  onClick={() => setFilter("Fulltime")}
                  className="sub-menu" to="/jobs/fulltime" id="lws-fulltime-menu">
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Fulltime
                </button>
              </li>
              <li>
                <button
                  onClick={() => setFilter("Remote")}
                  className="sub-menu" to="/jobs/remote" id="lws-remote-menu">
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </button>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/job" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
