import React from 'react'
import classes from './Student.module.css'
import {connect} from 'react-redux'
import Question from '../Question/Question'

class Student extends React.Component {

    state = {
        response: [],
        uid: 0
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

        // const i = newA.forEach((iterator, index) => {
        //     if(iterator.qid==qid) {
        //         console.log('Same qid', index)
        //         return index
        //     }
        //     else{
        //         console.log('Different qid')
        //         return null
        //     }
        // })
        // console.log('i : ', i)
        // if(i) {
        //     newA[i].oid = oid
        // }
        // else {
        //     newA.push(
        //         {
        //             qid,
        //             oid
        //         }
        //     )
        // }
        // console.log('newA = ', newA)
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
                <button className={classes.SubmitButton}>Submit</button>
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