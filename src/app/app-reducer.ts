import {Dispatch} from "redux";
import {authAPI} from "../api/todolists-api";
import {setIsLoggedInAC} from "../features/Login/auth-reducer";
import { handleServerAppError, handleServerNetworkError } from "../utils/error-utils";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false,
}

const slice = createSlice({
    name:'app',
    initialState:initialState,
    reducers:{
        setIsInitializedAC(state, action:PayloadAction<{value:boolean}>){
            state.isInitialized = action.payload.value
        },
        setAppErrorAC(state, action:PayloadAction<{value: string | null}>){
            state.error = action.payload.value
        },
        setAppStatusAC(state, action:PayloadAction<{value:RequestStatusType}>){
            state.status = action.payload.value
        }
    }
})

export const appReducer = slice.reducer
export const {setIsInitializedAC} = slice.actions
export const {setAppErrorAC} = slice.actions
export const {setAppStatusAC} = slice.actions


export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC({value:true}));
        } else {
            handleServerAppError(res.data, dispatch)
        }
    }).catch((error)=>{
        handleServerNetworkError(error, dispatch)
    }).finally(()=>{
        dispatch(setIsInitializedAC({value:true}))
    })
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

