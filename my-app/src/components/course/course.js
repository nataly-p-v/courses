import React, {Component} from 'react';

class Course extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {

        return (
            <li key={this.props.key} className={"courses"}>
                <span className={"courses-title"}>{this.props.title}</span>
                <br/>
                <span className={"courses-creation"}>{this.props.creation_date}</span>
                <br/>
                <span className={"courses-duration"}>{this.props.duration}</span>
            </li>
        );


    }
}

export default Course;
