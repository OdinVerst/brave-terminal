import {SET_CURRENT_OPERATOR} from '../types';

export const setSelectOperator = (payload:string | null) => ({
    type: SET_CURRENT_OPERATOR,
    payload
});