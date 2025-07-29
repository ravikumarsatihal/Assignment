import * as types from '../actions/actionTypes'


const initialState = {
    list :[],
    loadingList : false,
    post : null,
    loadingPost : false,
    error : null,
}



export default function blogReducer( state = initialState,action){
    switch ( action.type){
        case types.FETCH_POSTS_REQUEST:
            return {...state, loadingList:true};
        case types.FETCH_POSTS_SUCCESS:
            return {...state, loadingList:false,list: action.payload};
        case types.FETCH_POSTS_FAILURE:
            return {...state, loadingList:false,error: action.error};

        case types.FETCH_POST_REQUEST:
            return {...state, loadingList:true};
        case types.FETCH_POST_SUCCESS:
            return {...state, loadingList:false,list: action.payload};
        case types.FETCH_POST_FAILURE:
            return {...state, loadingList:false,error: action.error};

        default:
        return state;
    }
}