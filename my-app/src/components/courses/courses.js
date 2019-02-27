import React, { Component } from 'react';
import { connect } from 'react-redux';

class Courses extends Component {
    constructor() {
        super();
        this.state = {
            courses: [
                {
                    duration: 1,
                    title: 'List item 1'
                },
                {
                    duration: 2,
                    title: 'List item 2'
                },
                {
                    duration: 3,
                    title: 'List item 3'
                },
                {
                    duration: 4,
                    title: 'List item 4'
                }
            ],
            hasErrored: false,
            isLoading: false
        };
    }
    componentDidMount() {
        //console.log('http://www.mocky.io/v2/5c753ea63100000e00c233a9');
    }

    render() {
        if (this.state.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.state.courses.map((item) => (
                    <li key={item.duration}>
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    }
}


const mapStateToProps = state => ({
    ...state
})


const mapDispatchToProps = dispatch => ({
    ...dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
