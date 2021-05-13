import { useRouter } from 'next/router'

import {FC} from "react";
import Image from 'next/image';
import {Operator} from "../index";
import {OperatorCardImgWrapper, OperatorCardWrapper} from "./OperatorCard.styles";

export const OperatorCard: FC<Operator> = ({name, logo, id}) => {
    const router = useRouter()

    return (
        <OperatorCardWrapper onClick={() => {router.push('/payment')}}>
            <OperatorCardImgWrapper>
                <Image src={logo} alt={`${name} - Лого`} layout="fill" />
            </OperatorCardImgWrapper>
        </OperatorCardWrapper>
    )
}