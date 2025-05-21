import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { useEffect, useState } from 'react'



const EmployeeDashboard = (props) => {
  // console.log(props.data)
  return (

    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} setdata={props.setLoggedInUserdata} />
    </div>

  )
}

export default EmployeeDashboard
