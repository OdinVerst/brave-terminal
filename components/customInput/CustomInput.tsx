import {FC, InputHTMLAttributes} from "react";
import {CustomInputStyle} from "./CustomInput.styles";

export const CustomInput:FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <CustomInputStyle {...props} />
    )
}