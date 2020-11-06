import React from 'react'
import classes from './Question.module.css'
import {connect} from 'react-redux'

class Question extends React.Component{
    render(){
        return(
            <div className={classes.Container}>
                <p>{this.props.no + 1} {this.props.question}</p>
                {
                    this.props.options.map((iterator, index) => {
                        return(
                            <div className={classes.Options} key={index} onClick={() => this.props.optionSelect(this.props.questionId, iterator.optionId)}>
                                <input type="radio" name={this.props.questionId} value={iterator.optionId} />
                                <label htmlFor={iterator.optionId}>{iterator.text}</label> 
                            </div>
                        )
                        
                    })
                }
            </div>
        )
    }
}

export default Question