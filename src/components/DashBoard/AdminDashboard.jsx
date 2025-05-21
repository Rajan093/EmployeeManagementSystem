import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/ALLTask'

const AdminDashboard = ({ changeUser, employees, setEmployees }) => {
    return (
        <div className="h-screen w-full p-10 bg-black">
            <Header changeUser={changeUser} />
            <CreateTask Pemployees={employees} PsetEmployees={setEmployees} />
            <AllTask employees={employees} /> 
        </div>
    )
}

export default AdminDashboard