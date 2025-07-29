import * as types from './actionTypes'


export const fetchPostsRequest = ( filters = {}) => ({
    type: types.FETCH.POSTS.REQUEST,
    payload: filters
})

export const fetchPostRequest = (id) => ({
    type: types.FETCH.POST.REQUEST,
    payload: {id}
})
