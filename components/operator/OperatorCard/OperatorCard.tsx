import {FC} from "react";
import Image from 'next/image';
import {Operator} from "../index";
import {OperatorCardImgWrapper, OperatorCardWrapper} from "./OperatorCard.styles";

export const OperatorCard: FC<Operator> = ({name, logo, id}) => {
    return (
        <OperatorCardWrapper onClick={() => {console.log(id)}}>
            <OperatorCardImgWrapper>
                <Image src={logo} alt={`${name} - Лого`} layout="fill" />
            </OperatorCardImgWrapper>
        </OperatorCardWrapper>
    )
}