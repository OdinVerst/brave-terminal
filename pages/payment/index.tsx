import Image from 'next/image'
import {MainContainer, Wrapper} from "../../styles/main.styles";
import {CustomInput} from "../../components/customInput/CustomInput";
import {Button} from "../../components/button/Button";
import InputMask from 'react-input-mask';
import {ChangeEvent, FC, useEffect, useState} from "react";
import {connect} from "react-redux";
import {useRouter} from 'next/router'
import {AppState} from '../../redux/rootReducer';
import data from '../../data/data.json';
import {Footer} from "../../components/footer/Footer";

interface IUserValues {
    phone: string | null
    count: string | null
}

interface IPayment {
    selectOperator: string | null
}

const Payment:FC<IPayment> = ({selectOperator}) => {
    const router = useRouter()
    const [userValues, serUserValues] = useState<IUserValues>({
        phone: null,
        count: null
    });

    useEffect(() => {
        if (!selectOperator) {
            router.push('/')
        }
    }, [])

    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(!!userValues.count && !!userValues.count)
    }, [userValues]);

    const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        console.log(name)
        if (name && name === 'phone' || name === 'count') {
            serUserValues((prev) => ({...prev, [name]: value}))
        }
    }

    const sendHandler = () => {
        fetch('api/hello').then(res => {
            console.log(res)
        })
    }


    if (!selectOperator) return <div/>

    const currentOperator = data.operators.find(i => i.id === Number(selectOperator)) || null;

    return (
        <Wrapper>
            <MainContainer>
                <div style={{position: 'relative', width: '100px', height: '50px'}}>
                    {currentOperator ? <Image src={currentOperator.logo} layout={"fill"}/> : null}
                </div>
                <h2>Телефон</h2>
                <InputMask mask="+7 (999) 999 99 99" onChange={changeHandler}>
                    {() => <CustomInput name='phone' type="tel" />}
                </InputMask>

                <h2>Сумма</h2>
                <CustomInput onChange={changeHandler} name='count' inputMode="decimal"  />
                <Button text={'Оплатить'} isActive={isActive} onClick={sendHandler} />
            </MainContainer>
            <Footer/>
        </Wrapper>
    )
}

const mapStateToProps = (state: AppState):IPayment => ({
    selectOperator: state.operator.selectOperator
});

export default connect(mapStateToProps, null)(Payment)
