import { combineReducers } from 'redux';
import { courses, coursesHasErrored, coursesIsLoading } from './courses';

export default combineReducers({
  courses,
  coursesHasErrored,
  coursesIsLoading
});

