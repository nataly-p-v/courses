import React, { Component } from 'react';
import { connect } from 'react-redux';
import { coursesFetchData } from '../../store/actions/courses'
import { selectCources } from '../../store/selectors/selectCources'
import Course1 from '../../components/course/course'

class Courses extends Component {
    constructor (props) {
        super(props);

        this.addCourse = this.addCourse.bind(this);
    };

    componentDidMount() {
        this.props.fetchData('http://www.mocky.io/v2/5c753ea63100000e00c233a9')
    };

    addCourse = ({ target: { value } }) => {
       console.log(value)
    };

    render() {
        const {
            courses,
    } = this.props;

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div>
                <h1>Courses</h1>
                <div className="button-wrapper">
                    <button className={"btn btn-primary"} onClick={this.addCourse}>Add course</button>
                </div>
                <ul className="courses-list">
                    {courses && courses.map((item, i) => <Course1 {...item} key={i} />)}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        courses: selectCources(state),
        hasErrored: state.coursesHasErrored,
        isLoading: state.coursesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(coursesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);

