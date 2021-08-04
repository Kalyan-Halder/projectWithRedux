import { rootReducer } from "./rootReducer";
import {authReducer} from './authReducer'
import { userName } from "./userName";
import {combineReducers} from 'redux'

const allReducer = combineReducers(
    {
        rootReducer:rootReducer,
        authReducer:authReducer,
        userName:userName
    }
);

export default allReducer;