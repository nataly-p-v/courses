import React, {Component} from 'react';

class Course extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <li key={this.props.key} className={"courses"}>
                <span className={"courses-title"}>Course title: {this.props.title}</span>
                <br/>
                <span className={"courses-creation"}>Creation date:{this.props.creation_date}</span>
                <br/>
                <span className={"courses-duration"}>Duration: {this.props.duration}</span>
                <span className="button-wrapper">
                    <button className={"btn btn-primary"}>Edit</button>
                    <button className={"btn btn-primary"}>Delete</button>
                </span>
            </li>
        );


    }
}

export default Course;
