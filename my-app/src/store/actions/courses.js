export const coursesHasErrored = (bool) => ({
    type: 'COURSES_HAS_ERRORED',
    hasErrored: bool
});

export const coursesIsLoading = (bool) => {
    return {
        type: 'COURSES_IS_LOADING',
        isLoading: bool
    };
}

export function coursesFetchDataSuccess(courses) {
    return {
        type: 'COURSES_FETCH_DATA_SUCCESS',
        courses
    };
}

export function coursesFetchData(url) {
    return (dispatch) => {
        dispatch(coursesIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(coursesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((courses) => {
                dispatch(coursesFetchDataSuccess(courses))
            })
            .catch(() => dispatch(coursesHasErrored(true)));
    };
}
