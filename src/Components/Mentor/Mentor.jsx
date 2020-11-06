import React from 'react'
import classes from './Mentor.module.css'
import {connect} from 'react-redux'

const Mentor = (props) => {
    return(
        <div className={classes.Container}>
            Mentor
            {props.state.lot.map(i => {
                return <p>{i.question}</p>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        state: state
    }
}

export default connect(mapStateToProps)(Mentor)