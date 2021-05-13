import {FC} from "react";
import {ButtonStyle} from "./Button.styles";

interface Button {
    text: string,
    isActive: boolean,
    onClick: () => void
}

export const Button:FC<Button> = ({ text, isActive, onClick}) => {
    return (
        <ButtonStyle isActive={isActive} onClick={onClick}>{text}</ButtonStyle>
    )
}