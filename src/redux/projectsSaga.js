import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getProjectsSuccess } from './reducers/projectsSlice';

function* workGetProjectsFetch() {
    try {
        const projects = yield axios.get(`/api/projects`);
        yield put(getProjectsSuccess(projects.data));
    }
    catch(err) {
        console.log('Error in workGetProjectsFetch', err);
    }
}

function* projectsSaga() {
    yield takeEvery(`projects/getProjectsFetch`, workGetProjectsFetch);
}

export default projectsSaga;