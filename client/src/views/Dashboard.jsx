import React from 'react'
import AllProjects from '../components/AllProjects'
import CreateNewProject from '../components/CreateNewProject'
import UpdateProject from '../components/UpdateProject'

const Dashboard = props => {
    return (
        <div className="dashboard-container">

        <header>
            <nav>
                <ul>
                    <li>Projects</li>
                    <li>My Info</li>
                    <li>My Process Blog</li>
                </ul>
            </nav>
        </header>
        <main>
                <AllProjects />
        </main>
            
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
