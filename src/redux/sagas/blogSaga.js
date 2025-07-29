//import { call ,put , takeLatest} from ' redux-saga/effects'
import { call,put, takeLatest } from 'redux-saga/effects'
import {
    fetchPosts,
    fetchPostById
} from '../../api/blogApi'
import * as types from '../actions/actionTypes'


function* loadPosts({payload}){
    try {
        const response = yield call ( fetchPosts,payload)
        yield put ({ type: types.FETCH_POST_SUCCESS, payload:response.data.posts})
    }
    catch(error){
        //yield put ({ type: FETCH_POST_FAILURE,error})
    }
}

function* loadPost({payload}){
    try {
        const response = yield call ( fetchPostById,payload.id)
        yield put ({ type: types.FETCH_POSTS_SUCCESS, payload:response.data})
    }
    catch(error){
        //yield put ({ type: FETCH_POSTS_FAILURE,error})
    }
}

export default function* blogSaga(){
    yield takeLatest ( types.FETCH_POSTS_REQUEST, loadPosts)
    yield takeLatest (types.FETCH_POST_REQUEST,loadPost)
}
