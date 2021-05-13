import Operators from '../data/data.json';
import {OperatorList} from "../components/operator/OperatorList/OperatorList";
import {MainContainer, Wrapper} from "../styles/main.styles";
import {Footer} from "../components/footer/Footer";

export default function Home() {
    return (
        <Wrapper>
            <MainContainer>
                <h1>Выберите оператора</h1>
                <OperatorList operators={Operators.operators}/>
            </MainContainer>
            <Footer/>
        </Wrapper>
    )
}
