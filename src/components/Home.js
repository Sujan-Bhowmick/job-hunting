import React from 'react'
import Sidebar from './Sidebar'
import AllJob from './AllJob'

export default function Home() {
    return (
        <div>
                <div className="sidebar">
                <Sidebar />
                </div>
                <AllJob />
            </div>
    )
}
