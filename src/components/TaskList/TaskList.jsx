import React, { use } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FaildTask from './FaildTask'
import { useEffect, useState } from 'react'

const TaskList = (props) => {
    const data = props.data

    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex mt-10 justify-start w-full items-center py-5 gap-5 flex-nowrap'>

            {data.tasks.map((elem, idx) => {
                if (elem.active) {

                    return <AcceptTask
                        setTaskData={props.setdata}
                        data={elem}
                        Edata={data}
                        key={idx}
                    />
                }
                if (elem.newTask) {
                    return <NewTask
                        setTaskData={props.setdata}
                        data={elem}
                        Edata={data}
                        key={idx}
                    />
                }
                if (elem.completed) {
                    return <CompleteTask
                        setTaskData={props.setdata}
                        data={elem}
                        Edata={data}
                        key={idx} />
                }
                if (elem.failed) {
                    return <FaildTask
                        setTaskData={props.setdata}
                        data={elem}
                        Edata={data}
                        key={idx} />
                }
            })}
        </div>
    )
}

export default TaskList
