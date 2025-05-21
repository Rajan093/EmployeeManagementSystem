import React from 'react'
import { useContext, useEffect, useState } from 'react'

const Header = (props) => {

  const [userName, setUserName] = useState(null)
  // console.log(props)
  // if(data === null){
  //     setUserName('admin')
  // }
  // else{
  //     setUserName(data.firstname)
  // }
  
  const LogOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    // window.location.reload()
    props.changeUser('')
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data?.
        firstname ? props.data.firstname : "admin"} 👋</span></h1>
      <button onClick={LogOutUser} className='bg-red-500 text-white px-5 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header
