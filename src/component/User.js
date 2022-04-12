import React,{useState} from 'react'
import { UserContext } from '../context/Context'
import { NewUserHandleClick } from '../context/Context';
import AddTask from './AddTask'
import '../App.css';
import cwSvg from '../assets/cw.svg'
import growMan from '../assets/growing-up-man.svg'
import growwoMan from '../assets/growing-up-woman.svg'
import mail from '../assets/mail.svg'
import man from '../assets/man.svg'
import woman from '../assets/woman.svg'
import map from '../assets/map.svg'
import phone from '../assets/phone.svg'
import padlock from '../assets/padlock.svg'
import Footer from './Footer';
const User = () => {
    const {newUserHandleClick} = NewUserHandleClick()
    
    const [userPtwo, setUserPtwo] = useState()
    const [userPone, setUserPone] = useState()
    const [isClick,setIsClick] = useState(false)
    const [addTaskData,SetAddTaskData] = useState([])
    
return (
    <UserContext.Consumer>
        {
            (myData) => {
                
                const oneUser = myData[0];
            const    userhandleClick = () => {
                setIsClick(true)
                SetAddTaskData([...addTaskData,{
                    Firstname : oneUser.name.first,
                    Email : oneUser.email,
                    Phone : oneUser.phone,
                    Age : oneUser.dob.age,

                }])
                }
        
                const moauseHover = (e) => {
                    if(e.target.alt === 'growUser'){
                        setUserPtwo(oneUser.name.first)
                        setUserPone("My name is")
                    }else if(e.target.alt === 'mail'){
                        setUserPtwo(oneUser.email)
                        setUserPone("My email is")
                    }else if(e.target.alt === 'growUserBig'){
                        setUserPtwo(oneUser.dob.age)
                        setUserPone("My age is")
                    }else if(e.target.alt === 'map'){
                        setUserPtwo(oneUser.location.street.name)
                        setUserPone("My street is")
                    }
                    else if(e.target.alt === 'phone'){
                        setUserPtwo(oneUser.phone)
                        setUserPone("My phone is")
                    }
                    else if(e.target.alt === 'padlock'){
                        setUserPtwo(oneUser.login.password)
                        setUserPone("My password is")
                    }
                }
                return (
                    oneUser ?
                    (
                    <div className="App">
                        <img src={cwSvg} alt="cwSvg" className="cwImg" />
                        <div className="container">
                                <div className="userImg">
                                    <img src={oneUser.picture.large} alt="" />
                                </div>
                            <div className="infoUser">
                                <p>{userPone}</p>
                                <p>{userPtwo}</p>
                            </div>
                            <div className="pageUser">
                                <img src={oneUser.gender === 'male' ? man : woman} alt="growUser" className="pageUserImg" onMouseEnter={moauseHover} />
                                <img src={mail} alt="mail"  className="pageUserImg"  onMouseEnter={moauseHover}/>
                                <img src={oneUser.gender === 'male' ? growMan : growwoMan} alt="growUserBig" className="pageUserImg"  onMouseEnter={moauseHover} />
                                <img src={map} alt="map"  className="pageUserImg"  onMouseEnter={moauseHover}/>
                                <img src={phone} alt="phone"  className="pageUserImg"  onMouseEnter={moauseHover}/>
                                <img src={padlock} alt="padlock"  className="pageUserImg"  onMouseEnter={moauseHover}/>
                            </div>
                            <div className="buttons">
                            <button onClick={newUserHandleClick}>NEW USER</button>
                            <button onClick={userhandleClick}>ADD USER</button>
                            </div>
                            { isClick ? <AddTask addTaskData = {addTaskData} /> : ""}
                            
                        </div>
                        <Footer/>
                    </div>
                    
                    )
                    
                    : ""
                        
                )
                
            
                    
            
            }
            
        }

    </UserContext.Consumer>
)
}

export default User