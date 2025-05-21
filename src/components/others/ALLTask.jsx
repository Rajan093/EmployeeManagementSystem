import React, { use } from 'react';
import { useContext } from 'react';
// import { AuthContext } from '../context/AuthProvider.jsx';
import { AuthContext } from "../../context/AuthProvider.jsx";  // ✅ Fix

const AllTask = ({employees}) => {
    const authData = useContext(AuthContext);

    // console.log(authData.employees)
    return (



        <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-60'>
            <div className='bg-green-400 hover:bg-green-500 text-black mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/6 text-center'>Employee Name</h2>
                <h3 className='w-1/6 text-center'>Active Task</h3>
                <h5 className='w-1/6 text-center'>Completed Task</h5>
                <h5 className='w-1/6 text-center'>New Task</h5>
                <h5 className='w-1/6 text-center'>Failed Task</h5>
            </div>
            <div className='h-35 overflow-auto'>
                {employees?.map(function (elem , idx) {
                    return <div key = {idx} className='bg-green-400 hover:bg-green-500 text-black mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className=' w-1/6 text-center'>{elem.firstname}</h2>
                        <h3 className=' w-1/6 text-center'>{elem.taskCount.active}</h3>
                        <h5 className=' w-1/6 text-center'>{elem.taskCount.completed}</h5>
                        <h5 className=' w-1/6 text-center'>{elem.taskCount.newTask}</h5>
                        <h5 className=' w-1/6 text-center'>{elem.taskCount.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    );
};

export default AllTask;