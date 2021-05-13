import {FC} from "react";
import {Operator} from "../index";
import OperatorCard from "../OperatorCard/OperatorCard";
import {OperatorListWrapper} from "./OperatorList.styles";

type OperatorListProps = {
    operators: Operator[],
}

export const OperatorList: FC<OperatorListProps> = ({operators}) => {
    return (
        <OperatorListWrapper>
            {operators.map(item => <OperatorCard key={item.id} name={item.name} logo={item.logo} id={item.id}/>)}
        </OperatorListWrapper>
    )
}