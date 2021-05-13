import {combineReducers} from "redux";
import {operatorReducer} from "./operator/operatorReduser";

export interface AppState {
    operator: {
        selectOperator: string | null
    }
}

export const rootReducer = combineReducers({
    operator: operatorReducer,
});