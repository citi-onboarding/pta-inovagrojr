import styled from "styled-components";





export const Contat = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 50px;
    background-color: #FFF;

    a{
        width: 290px;
        height: 5px;
        background-color: #005038;
        border-bottom: 50px;
    }


    

    p{        
        color: #005038;
        font-family: Montserrat;
        font-size: 65px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    b{
        width: 956px;
        height: 1px;
        background: #FFF;
        margin-bottom: 64px;
    }
`

export const Caixa = styled.div`
    
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #FFF;
    flex-direction: column;
    align-items: center;

    a{
        width: 1120px;
        height: 572px;
        background-color: #005038;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 33px;       
    }

    p{
        color: #FFF;
        font-family: Montserrat;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-top: 39px;
        margin-bottom: 39px;
    }

    input{
        color: #FFF;
        font-family: Montserrat;
        font-size: 25px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        background-color: #005038;
        border: none;
        width: 956px;  
    }

    input:focus{
        outline: 2px solid #FFF;
    }

    b{
        width: 956px;
        height: 1px;
        background: #FFF;
        margin-bottom: 64px;
    }

    input::placeholder{
        color: #FFF;
    }

    button{
        width: 167px;
        height: 53.093px;
        border-radius: 5px;
        background: #FFF;
        color: #005038;
        font-family: Montserrat;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        justify-content: center;
    }

    i{
        width: 956px;
        height: 1px;
        background: #FFF;
        margin-bottom: 24px;
    }

    span{
        width: 956px;
        height: 10px;
        color: #005038;
        display: flex;
        justify-content: flex-end;
    }

`