import React from 'react'
import {Route} from 'react-router-dom'
import Mentor from './Components/Mentor/Mentor'
import Student from './Components/Student/Student'
import './App.css'

class App extends React.Component{
    render() {


        return(
            <div className="App">
                <Mentor />
                <Student />
            </div>
        )
    }
}

export default App