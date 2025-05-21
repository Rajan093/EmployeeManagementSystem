import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login.jsx';
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard.jsx';
import AdminDashboard from './components/DashBoard/AdminDashboard.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserdata, setLoggedInUserdata] = useState(null);
  // const [AllEmp , setAllEmp] =  useState()
  const { userData } = useContext(AuthContext);
  // const employees = userData?.employees || [];
  const [employees, setEmployees] = useState(userData?.employees || []);

  console.log(userData.employees)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserdata(userData.data || null);
    }
  }, []);
  // console.log(user)
  const Handlelogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      return;
    }
    if (!employees.length) {
      alert('Employees not loaded yet. Try again in a moment.');
      return;
    }
    const employee = employees.find(
      emp => emp.email === email && emp.password === password
    );
    if (employee) {
      setUser('employee');
      setLoggedInUserdata(employee);
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: employee })
      );
    } else {
      alert('Invalid credentials');
    }
  };

  // console.log(loggedInUserdata)


  return (
    <>
      {!user && <Login Handlelogin={Handlelogin} />}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} employees={employees} setEmployees={setEmployees} /> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserdata} setLoggedInUserdata={setLoggedInUserdata} /> : null)}
    </>
  )
}
export default App
