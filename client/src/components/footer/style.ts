import styled from "styled-components";

export const MainFooter = styled.footer`
    background-color: #005038;
    border-radius: 12px 12px 0 0;
    display: flex;
    align-items: center;
    padding: 3rem 10%;
    justify-content: center;
    gap: 2rem;

    h3 {
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5rem;
    }

    p {
        font-weight: 300;
        font-family: 'Montserrat', sans-serif;

    }
    `

export const ChildDiv = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;

    &:nth-child(3) {
        justify-content: right;
        text-align: right;
    }
    `

export const IconDiv = styled.div`
    display: flex;
    justify-content: right;

    img {
        margin-left: 2rem;
    }
    `

export const LogoButton = styled.a`
    display: flex;
    justify-content: center;
    margin-right: 2rem;
    img {
        width: 18rem;
        transition: .3s;
    }

    img:hover{
        transition: .3s;
        width: 19rem;
    }
    `

export const SignatureDiv = styled.div`
    display: flex;
    justify-content: right;
    img {
        margin-left: 5px;
    }
    `