import React from 'react'
import classes from './Student.module.css'
import {connect} from 'react-redux'
import Question from '../Question/Question'

class Student extends React.Component {

    state = {
        response: [],
        uid: 0,
        score: 0,
        showScore : false
    }

    optionSelect = (qid, oid) => {
        console.log('Qid oid : ', qid, oid)
        const newA = this.state.response.filter((iterator, index) => {
            return iterator.qid!==qid
        })

        newA.push({
            qid,
            oid
        })

        this.setState({
            ...this.state,
            response : newA
        })

        console.log('newA : ', newA)

    }

    handleSubmit = () => {
        console.log(this.props.state.lot)
        const newA = this.state.response
        let score = 0
        newA.map((iterator, index) => {
            this.props.state.lot.map((itr, ind) => {
                if(itr.questionId===iterator.qid && itr.correct===iterator.oid) {
                    score = score + 1
                }
            })
        })

        this.setState({
            score : score,
            showScore : true
        }, () => {
                console.log('Your score is : ', this.state.score)
            }
        )
    }


    render(){
        return(
            <div className={classes.Container}>
                Student
                {
                    this.props.state.lot.map((iterator, index) => {
                        return <Question key={index} {...iterator} no={index} optionSelect={(qid, oid) => this.optionSelect(qid, oid)} />
                    })
                }
                <button className={classes.SubmitButton} onClick={this.handleSubmit}>Submit</button>
                {
                    this.state.showScore && <strong>Your score is {this.state.score}</strong>
                }
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return{
        state: state
    }
}

export default connect(mapStateToProps)(Student)