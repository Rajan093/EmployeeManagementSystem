import React, { use } from 'react'
// import { AuthContext } from '../context/AuthProvider';
import { AuthContext } from "../../context/AuthProvider.jsx";  // ✅ Fix
import { useContext } from 'react'


const AcceptTask = (props) => {
    const data = props.data
    const Edata = props.Edata
    // const setTaskData = props.setTaskData
    const stored = JSON.parse(localStorage.getItem('employees'))
    // const stored = useContext(AuthContext).employees



    const completedHandler = () => {
        console.log("YYYY")
        const updatedEmployees = stored.map(emp => {
            if (emp.firstname === Edata.firstname) {
                // Clone task array and employee object
                const updatedTasks = emp.tasks.map(t => {
                    if (
                        t.taskTitle === data.taskTitle &&
                        t.taskDate === data.taskDate &&
                        t.category === data.category &&
                        t.taskDescription === data.taskDescription &&
                        t.active === true
                    ) {
                        return {
                            ...t,
                            active: false,
                            newTask: false,
                            completed: true,
                            failed: false
                        };
                    }
                    return t;
                });

                return {
                    ...emp,
                    taskCount: {
                        ...emp.taskCount,
                        completed: emp.taskCount.completed + 1,
                        active: emp.taskCount.active - 1,
                    },
                    tasks: updatedTasks
                };
            }
            return emp;
        });

        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        const updatedEmp = updatedEmployees.find(emp => emp.firstname === Edata.firstname);
        // console.log(props.data)
        // localStorage.setItem('loggedInUser', JSON.stringify(updatedEmp))
        localStorage.setItem('loggedInUser', JSON.stringify({
            role: 'employee',
            data: updatedEmp
        }));
        props.setTaskData(updatedEmp); // Now this is a *new object*
        // console.log(props.data)
    };

    const failedHandler = () => {
        const updatedEmployees = stored.map(emp => {
            if (emp.firstname === Edata.firstname) {
                const updatedTasks = emp.tasks.map(t => {
                    if (
                        t.taskTitle === data.taskTitle &&
                        t.taskDate === data.taskDate &&
                        t.category === data.category &&
                        t.taskDescription === data.taskDescription &&
                        t.active === true
                    ) {
                        return {
                            ...t,
                            active: false,
                            newTask: false,
                            completed: false,
                            failed: true
                        };
                    }
                    return t;
                });

                return {
                    ...emp,
                    taskCount: {
                        ...emp.taskCount,
                        failed: emp.taskCount.failed + 1,
                        active: emp.taskCount.active - 1,
                    },
                    tasks: updatedTasks
                };
            }
            return emp;
        });

        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        const updatedEmp = updatedEmployees.find(emp => emp.firstname === Edata.firstname);
        localStorage.setItem('loggedInUser', JSON.stringify({
            role: 'employee',
            data: updatedEmp
        }));
        props.setTaskData(updatedEmp);
    };
    // console.log(data)
    return (
        <div className='h-[300px] p-5 rounded-xl w-[350px] py-6 px-9 bg-yellow-400 flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 h-[80px] overflow-y-auto pr-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-4 gap-4'>
                <button
                    onClick={
                        completedHandler
                    }
                    className='bg-blue-700 px-2 py-1 text-sm hover:bg-blue-500'>
                    Mark as Completed</button>
                <button
                    onClick={
                        failedHandler
                    }
                    className='bg-cyan-500 px-2 py-1 text-sm hover:bg-cyan-400'>
                    Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
