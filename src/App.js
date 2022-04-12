import React from 'react'
import Footer from './component/Footer'
import User from './component/User'
import Context from './context/Context'

const App = () => {
  return (
    <Context>
        <User/>
        
    </Context>
  )
}

export default App