import React, { Component } from 'react';
import { connect } from 'react-redux';
import { coursesFetchData } from '../../actions/courses';

class Courses extends Component {
    componentDidMount() {
        this.props.fetchData('http://www.mocky.io/v2/5c753ea63100000e00c233a9');
    }

    coursesFetchData = (event) => {
        this.props.coursesFetchData();
        console.log(this.props)
    };

    render() {
        if (this.props.coursesHasErrored) {
            return <p>Sorry! There was an error loading the courses</p>;
        }

        if (this.props.coursesIsLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {console.log(this.props.coursesFetchDataSuccess)}
                {/*{this.props.courses ?*/}
                    {/*this.props.courses.map((item) => (*/}
                        {/*<li key={item.duration}>*/}
                            {/*{item.title}*/}
                        {/*</li>*/}
                    {/*))*/}
                    {/*: ''}*/}

            </ul>
        );
    }
}


const mapStateToProps = state => ({
    ...state
})


const mapDispatchToProps = dispatch => ({
    fetchData: (url) => dispatch(coursesFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
