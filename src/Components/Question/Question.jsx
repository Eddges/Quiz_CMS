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
                            <div>
                                <input type="radio" name={this.props.questionId} value={iterator.optionId} />
                                <label for={iterator.optionId}>{iterator.text}</label> 
                            </div>
                        )
                        
                    })
                }
            </div>
        )
    }
}

export default Question