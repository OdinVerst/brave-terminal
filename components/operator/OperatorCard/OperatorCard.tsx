import { useRouter } from 'next/router'

import {FC} from "react";
import Image from 'next/image';
import {Operator} from "../index";
import {OperatorCardImgWrapper, OperatorCardWrapper} from "./OperatorCard.styles";
import { connect } from 'react-redux';
import {setSelectOperator} from "../../../redux/operator/operatorActions";
//@ts-ignore
const OperatorCard: FC<Operator> = ({name, logo, id, setSelectOperator}) => {
    const router = useRouter();

    const clickHandler = () => {
        console.log('here');
        setSelectOperator(id);
        router.push('/payment')
    }

    return (
        <OperatorCardWrapper onClick={clickHandler}>
            <OperatorCardImgWrapper>
                <Image src={logo} alt={`${name} - Лого`} layout="fill" />
            </OperatorCardImgWrapper>
        </OperatorCardWrapper>
    )
}

const mapDispatchToProps = {
    setSelectOperator
}

export default connect(null, mapDispatchToProps)(OperatorCard)