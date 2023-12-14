import React from "react";
import { MainFooter, ChildDiv, IconDiv, LogoButton, SignatureDiv } from "./style";
import { LogoInovAgro, IconeEmail, IconeFacebook, IconeInsta, IconeLinkedin, WhiteCiti } from "assets";

export default function Footer() {
    return(
        <MainFooter>
            <ChildDiv>
                <h3>Endereço</h3>
                <p>Rua Manoel de Medeiros, sn - Dois Irmãos Recife</p>
                <br />
                <h3>Contato</h3>
                <p>(81) 8128-8033 - Victor Henrique</p>
                <p>(87) 9971-9288 - Marina Pires</p>
                <p>(81) 9892-6366 - Ester Rosal</p>
                <p>(81) 99659-8548 - Fernanda Lira</p>    
                
            </ChildDiv>

            <ChildDiv>
                <LogoButton href="/">
                    <img src={LogoInovAgro.src} alt="Logo " />
                </LogoButton>
            </ChildDiv>

            <ChildDiv>
                <h3>Redes Sociais</h3>
                <br />
                <IconDiv>
                    <a href="https://www.instagram.com/inovagrojr/" target="_blank">
                        <img src={IconeInsta.src} alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/company/inovagro-jr/" target="_blank">
                        <img src={IconeLinkedin.src} alt="Linkedin" />
                    </a>
                    
                    <a href="https://www.facebook.com/inovagrojrconsultoria" target="_blank">
                        <img src={IconeFacebook.src} alt="Facebook" />
                    </a>

                    <a href="mailto:inovagrojr.ufrpe@gmail.com" target="_blank">
                        <img src={IconeEmail.src} alt="Email" />
                    </a>
                    
                </IconDiv>
                <br />
                <SignatureDiv>
                    <p>Made with &lt;/&gt; and 💚 by </p>
                    <a href="https://www.linkedin.com/company/citiufpe/" target="_blank">
                        <img src={WhiteCiti.src} alt="CiTi" />
                    </a>
                </SignatureDiv>
            </ChildDiv>
        </MainFooter>
    );
}