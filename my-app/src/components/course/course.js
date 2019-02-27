import React, {Component} from 'react';

class Course extends Component {
    constructor() {
        super();
        this.editCourse = this.editCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    };

    editCourse = ({ target: { value } }) => {
        console.log(value)
    };

    deleteCourse = ({ target: { value } }) => {
        console.log(value)
    };

    render() {

        return (
            <li key={this.props.key} className={"courses"}>
                <span className={"courses-title"}>Course title: {this.props.title}</span>
                <br/>
                <span className={"courses-creation"}>Creation date:{this.props.creation_date}</span>
                <br/>
                <span className={"courses-duration"}>Duration: {this.props.duration}</span>
                <span className="button-wrapper">
                    <button className={"btn btn-primary"} onClick={this.editCourse}>Edit</button>
                    <button className={"btn btn-primary"} onClick={this.deleteCourse}>Delete</button>
                </span>
            </li>
        );


    }
}

export default Course;
