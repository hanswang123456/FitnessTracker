import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {RiDeleteBin6Fill} from "react-icons/ri"
import {FaUser} from "react-icons/fa"
import {BsFillChatLeftTextFill} from "react-icons/bs"
import {BiTimer} from "react-icons/bi"
import {MdDateRange} from "react-icons/md"



const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.desc}</td>
        <td>{props.exercise.duration+ " min"}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td style={{backgroundColor:"#8B0000"}}>
            <div style={{width:"100%", textAlign:"center"}}>
                 <a
                 href="#" 
                 onClick={() => { props.deleteExercise(props.exercise._id) }}><RiDeleteBin6Fill size={20}/></a>
</div>
        </td>
    </tr>
)

export default class ExerciseList extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this)
        this.state = { exercises: [] };

    }

    componentDidMount() {

        axios.get("http://localhost:5000/exercises/")
            .then(res => {
                this.setState({ exercises: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }


    deleteExercise(id) {
        axios.delete("http://localhost:5000/exercises/" + id)
            .then(res => console.log(res.data))

        this.setState({ exercises: this.state.exercises.filter(el => el._id !== id) })
    }

    exerciseList() {
        return this.state.exercises.map(current => {
            return <Exercise exercise={current} deleteExercise={this.deleteExercise} key={current._id}></Exercise>
        })
    }
    render() {
        return (
            <div className="listings"><h1>Exercise History</h1>
                <table>
                    <tbody>
                        <tr>
                            <th><div><FaUser/> User</div></th>
                            <th><div><BsFillChatLeftTextFill/> Description</div></th>
                            <th><div><BiTimer size={25}/> Duration</div></th>
                            <th><div><MdDateRange size={20}/> Date</div></th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}