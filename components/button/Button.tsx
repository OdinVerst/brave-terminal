import {FC} from "react";
import {ButtonStyle} from "./Button.styles";

interface Button {
    text: string,
    isActive: boolean
}

export const Button:FC<Button> = ({ text, isActive }) => {
    return (
        <ButtonStyle isActive={isActive}>{text}</ButtonStyle>
    )
}