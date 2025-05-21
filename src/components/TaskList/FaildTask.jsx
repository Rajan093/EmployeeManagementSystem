import React from 'react'
import { useContext } from 'react'

const FaildTask = ({data}) => {
  return (
    <div className='h-[300px] p-5 rounded-xl w-[350px] py-6 px-9 bg-orange-400 flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
                <h4 className='bg-red-600 px-3 py-1 text-sm rounded'>Failed Task</h4>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            {/* <div className='flex justify-between mt-4 gap-4'>
                <button className='bg-blue-700 px-2 py-1 text-sm'>Failed</button>
            </div> */}
        </div>
  )
}

export default FaildTask
