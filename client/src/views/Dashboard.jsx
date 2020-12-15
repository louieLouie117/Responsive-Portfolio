import React from 'react'
import AllProjects from '../components/AllProjects'
import CreateNewProject from '../components/CreateNewProject'

const Dashboard = props => {
    return (
        <div className="dashboard-container">
           <CreateNewProject/>
           <AllProjects/>
            
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
