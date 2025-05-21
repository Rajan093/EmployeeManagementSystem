// import React from 'react'
import { AuthContext } from "../../context/AuthProvider.jsx"; 
import { useContext } from 'react'

const NewTask = (props) => {
    const data = props.data
    const Edata = props.Edata
    // const stored = useContext(AuthContext).employees
    const { userData } = useContext(AuthContext);
    const stored = userData?.employees || [];
    const acceptHandler = () => {
        const updatedEmployees = stored.map(emp => {
            if (emp.firstname === Edata.firstname) {
                const updatedTasks = emp.tasks.map(t => {
                    if (
                        t.taskTitle === data.taskTitle &&
                        t.taskDate === data.taskDate &&
                        t.category === data.category &&
                        t.taskDescription === data.taskDescription &&
                        t.newTask === true
                    ) {
                        return {
                            ...t,
                            active: true,
                            newTask: false,
                            completed: false,
                            failed: false
                        };
                    }
                    return t;
                });

                return {
                    ...emp,
                    taskCount: {
                        ...emp.taskCount,
                        active: emp.taskCount.active + 1,
                        newTask: emp.taskCount.newTask - 1,
                    },
                    tasks: updatedTasks
                };
            }
            return emp;
        });

        // Save to localStorage
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        // Also update loggedInUser
        const updatedEmp = updatedEmployees.find(emp => emp.firstname === Edata.firstname);
        localStorage.setItem('loggedInUser', JSON.stringify({
            role: 'employee',
            data: updatedEmp
        }));

        // Update state
        props.setTaskData(updatedEmp);
    };

    return (
        <div className='h-[300px] p-5 rounded-xl w-[350px] py-6 px-9 bg-red-400 flex-shrink-0'>
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
                    onClick={acceptHandler}
                    className='bg-blue-700 px-2 py-1 hover:bg-blue-500 text-sm'>Accept</button>
            </div>
        </div>
    )
}


export default NewTask
