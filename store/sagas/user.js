import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as T from "@/store/types"



function* addUser(action){
    try{
        alert(' >>> Saga 인지함 <<< ')
        const newUser = yield response.json()
        yield put({
            type: T.USER_ADD_SUCCESSED,
            payload: newUser.data
        }) 
    }catch(error){
        yield put({
            type: T.USER_ADD_FAILED,
            payload: error.message
        })
    }
}
export function* watchAddUser(){
    yield takeLatest(T.USER_ADD_REQUESTED, addUser)
}
