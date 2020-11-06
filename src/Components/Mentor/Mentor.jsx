import React from 'react'
import classes from './Mentor.module.css'
import {connect} from 'react-redux'
import Question from '../Question/Question'
// import uuid4 from "uuid4";
import { v4 as uuid4 } from 'uuid'

class Mentor extends React.Component {
    state = {
        lot : this.props.state.lot,
        showQuestionInput : false,
        showOptionInput : false,
        questionInput : '',
        optionInput : '',
        options : [],
        showDoneButton : []
    }

    handleAddQuestion = () => {
        this.setState({
            ...this.state,
            showQuestionInput : true
        })
    }

    handleAddOption = () => {
        this.setState({
            ...this.state,
            showOptionInput : true
        })
    }

    handleQuestionInput = (e) => {
        this.setState({
            ...this.state,
            questionInput : e.target.value
        })
    }

    handleOptionInput = (e) => {
        this.setState({
            ...this.state,
            optionInput : e.target.value
        })
    }

    handleRight = () => {
        let flag = false
        // const newQuestion = {
        //     question : this.state.questionInput,
        //     questionId : uuid4(),

        // }
        let newA = this.state.lot
        newA.map((iterator, index) => {
            if(iterator.question===this.state.questionInput) {
                console.log('Question matched')
                flag = true
                const optionId = uuid4()
                iterator.options.push(
                    {
                        text : this.state.optionInput,
                        optionId
                    }
                )
                console.log('OptionId : ', optionId)
                iterator.correct = optionId
                this.setState({
                    ...this.state,
                    options : this.state.options.push({
                        text : this.state.optionInput,
                        optionId : uuid4()
                    })
                }, () => {
                    console.log('New opts : ', this.state)
                })
            }
        })
        
        // if(flag) {
        //     this.setState({
        //         ...this.state,
        //         lot : newA
        //     })
        // }
        if(!flag) {
            console.log('Question not matched')
            const optionId = uuid4()
            newA.push({
                question : this.state.questionInput,
                questionId : uuid4(),
                correct : optionId,
                options : [
                    {
                        text : this.state.optionInput,
                        optionId
                    }
                ]
            })
            this.setState({
                ...this.state,
                options : this.state.options.push(
                    {
                        text : this.state.optionInput,
                        optionId : uuid4()
                    }
                )
            }, () => {
                console.log('New opts : ', this.state)
            })
        }

        console.log('Final newA : ', newA)

        this.setState({
            ...this.state,
            lot : newA
        })

    }

    handleWrong = () => {
        let flag = false

        let newA = this.state.lot
        newA.map((iterator, index) => {
            if(iterator.question===this.state.questionInput) {
                console.log('Question matched')
                flag = true
                iterator.options.push(
                    {
                        text : this.state.optionInput,
                        optionId : uuid4()
                    }
                )
                this.setState({
                    ...this.state,
                    options : this.state.options.push({
                        text : this.state.optionInput,
                        optionId : uuid4()
                    })
                }, () => {
                    console.log('New opts : ', this.state)
                })
            }
        })
        
        // if(flag) {
        //     this.setState({
        //         ...this.state,
        //         lot : newA
        //     })
        // }
        if(!flag) {
            console.log('Question not matched')
            newA.push({
                question : this.state.questionInput,
                questionId : uuid4(),
                options : [
                    {
                        text : this.state.optionInput,
                        optionId : uuid4()
                    }
                ]
            })
            this.setState({
                ...this.state,
                options : this.state.options.push(
                    {
                        text : this.state.optionInput,
                        optionId : uuid4()
                    }
                )
            }, () => {
                console.log('New opts : ', this.state)
            })
        }

        console.log('Final newA : ', newA)

        this.setState({
            ...this.state,
            lot : newA
        })

    }


    render(){
        return(
            <div className={classes.Container}>
                Mentor
                {/* {props.state.lot.map(i => {
                    return <p>{i.question}</p>
                })} */}
                {
                    this.props.state.lot.map((iterator, index) => {
                        return <Question key={index} {...iterator} no={index} optionSelect={(qid, oid) => this.optionSelect(qid, oid)} mentor={true} />
                    })
                }

                <div className={classes.Add}>
                    <button className={classes.AddButton} onClick={this.handleAddQuestion}>Add Question</button>
                    {
                        this.state.showQuestionInput ? 
                            <div className={classes.AddQuestion}>
                                <input placeholder="Enter Question" onChange={this.handleQuestionInput} />
                                {
                                    this.state.options.map((iterator, index) => 
                                        <div key={index} className={classes.Option}>
                                            <span>{iterator.text}</span>
                                        </div>
                                    )
                                }
                                {
                                    this.state.showOptionInput ? 
                                        <div className={classes.Option}>
                                            <input placeholder="Enter Option" onChange={this.handleOptionInput} />
                                            <button onClick={this.handleRight}>Correct</button>
                                            <button onClick={this.handleWrong}>Wrong</button>
                                            <button>Cancel</button>
                                        </div> : null
                                }

                                <button onClick={this.handleAddOption}>Add Options</button>
                            </div> : null
                    }
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return{
        state: state
    }
}

export default connect(mapStateToProps)(Mentor)