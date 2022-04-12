import React from 'react'
import '../App.css';
const AddTask = ({addTaskData}) => {
    console.log(addTaskData);
    
return (
    <table>
        <thead>
        <tr>
                <th>Firstname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
            </tr>
        </thead>
        {
        addTaskData.map((item) => (
            <tbody key={item.Firstname}>
            <tr >
                <td>{item.Firstname}</td>
                <td>{item.Email}</td>
                <td>{item.Phone}</td>
                <td>{item.Age}</td>
            </tr>
            </tbody>
        ))}
    </table>
  )
  
}

export default AddTask