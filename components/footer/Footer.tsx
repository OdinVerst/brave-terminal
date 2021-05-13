import {FC} from "react";
import {FooterContainer} from "../../styles/main.styles";
import Image from "next/image";

export const Footer: FC = () => {
    return (<FooterContainer>
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
        </a>
    </FooterContainer>)
};