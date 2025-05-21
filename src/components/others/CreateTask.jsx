import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const CreateTask = ({ Pemployees, PsetEmployees }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(stored);
    }, []);

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        const BNewTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        };
        const data = JSON.parse(localStorage.getItem('employees'))

        data.forEach(function (elem) {
            if (assignTo == elem.firstname) {
                elem.tasks.push(BNewTask)
                let count = 0;
                elem.tasks.forEach(function (task) {
                    // console.log(task)
                    if (task.newTask) {
                        count++
                    }
                })
                console.log(count)
                elem.taskCount.newTask = count
            }
        })

        PsetEmployees(data)
        localStorage.setItem('employees', JSON.stringify(data))

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')

    }
    return (
        <div className="bg-[#1c1c1c] text-white p-6 rounded w-full max-w-5xl mx-auto mt-10">
            <form
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className="flex flex-col md:flex-row justify-between gap-6">
                {/* Left Side Inputs */}
                <div className="flex flex-col w-full md:w-1/2 gap-4">
                    <div>
                        <label className="block mb-1">Task Title</label>
                        <input
                            required
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            type="text"
                            placeholder="Make a UI design"
                            className="w-full p-2 rounded bg-transparent border border-white outline-none"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Date</label>
                        <input
                            required
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            type="date"
                            placeholder="dd/mm/yyyy"
                            className="w-full p-2 rounded bg-transparent border border-white outline-none"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Assign to</label>
                        <select
                            required
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className="w-full p-2 rounded bg-transparent border border-white outline-none"
                        >
                            <option value="">Select employee</option>
                            {employees.map((emp) => (
                                <option key={emp.id} value={emp.firstname}>
                                    {emp.firstname}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1">Category</label>
                        <input
                            required
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            type="text"
                            placeholder="design, dev, etc"
                            className="w-full p-2 rounded bg-transparent border border-white outline-none"
                        />
                    </div>
                </div>

                {/* Right Side Description and Button */}
                <div className="flex flex-col w-full md:w-1/2 gap-4">
                    <div>
                        <label className="block mb-1">Description</label>
                        <textarea
                            required
                            value={taskDescription}
                            onChange={(e) => {
                                setTaskDescription(e.target.value)
                            }}
                            rows="6"
                            placeholder="Detailed description of task..."
                            className="w-full p-2 rounded bg-transparent border border-white outline-none resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-400 text-black py-2 rounded hover:bg-green-500 transition"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;