import styled from "styled-components";

export const Section5Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 150px 10%;
    background-color: #FFFFFF;
    align-items: center;

    hr {
        justify-content: center;
        border: 0px;
        border-top: 4px solid #005038;
        background-color: #dddddd;
        width: 47rem;
    }

    h3 {
        background-color: red;
        color: blue;
        font-size: 100px;
    }

    div {
        z-index: 5;
    }
`

export const Section5H2 = styled.h2`
    text-align: center;
    color: #005038;
    font-family: 'Montserrat', sans-serif;
    font-size: 55px;
`

export const DivCarrossel = styled.div`
    display: flex;
    align-items: center;

    button {
        border: none;
        background: transparent;
        color: #005038;
        font-size: 6.25rem;
        font-family: 'Montserrat', sans-serif;
        margin: 1.5rem;
        height: 10%;
        transition: .3s;
    }

    button:hover{
        transition: .3s;
        color: #81a99b;
    }
    `