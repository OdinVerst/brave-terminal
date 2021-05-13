import { FC } from "react";
import {CustomInputStyle} from "./CustomInput.styles";

export const CustomInput:FC= (props) => {
    return (
        <CustomInputStyle {...props} />
    )
}