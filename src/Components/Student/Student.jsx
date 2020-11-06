import React from 'react'
import classes from './Student.module.css'
import {connect} from 'react-redux'
import Question from '../Question/Question'

const Student = (props) => {
    return(
        <div className={classes.Container}>
            Student
            {
                props.state.lot.map((iterator, index) => {
                    return <Question {...iterator} no={index} />
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        state: state
    }
}

export default connect(mapStateToProps)(Student)