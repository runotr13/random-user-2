import React,{ useContext, useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext();

const Context = (props) => {

    const [myData, setMyData] = useState([])
    const newUserHandleClick = async () => {
        myUser()
    } 

    const myUser = async () => {
    const data =  await axios.get('https://randomuser.me/api/')
    setMyData(data.data.results)
}

    useEffect(() => {
        myUser();
    },[])

return (
    <UserContext.Provider value={{...myData,newUserHandleClick}}>
        {props.children}
    </UserContext.Provider>
    
)
}
export const NewUserHandleClick = () => {
    return useContext(UserContext)
}

export default Context