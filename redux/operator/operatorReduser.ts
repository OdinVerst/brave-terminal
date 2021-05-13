import {SET_CURRENT_OPERATOR} from "../types";

const initialState = {
    selectOperator: null
};

interface setCurrentOperator {
    type: "SET_CURRENT_OPERATOR";
    payload: string | null
}

export const operatorReducer = (state = initialState, action:setCurrentOperator) => {
    switch (action.type) {
        case SET_CURRENT_OPERATOR:
            return {...state, selectOperator: action.payload}
        default:
            return state;
    }
};