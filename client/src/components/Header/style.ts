import styled from "styled-components";


export const Head = styled.div`
    width: 100%;
    height: 145.547px; 
    display: flex;
    background-color : #FFF;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    //border: 0.5px solid #005038;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    list-style-type: none;



    img{
        width: 354px;
        height: 133px;
        margin-bottom: 25px;
    }

    a{
        color: #252525;
        font-family: Montserrat;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        white-space: nowrap;

    }

    a:hover{
        color: #0EBE68;
        cursor: pointer;
    }

    button{
        width: 167px;
        height: 53.093px;
        display: flex;
        border-radius: 5px;
        background: #0EBE68;
        justify-content: center;
        align-items: center;
        border: none;
    }
    

    p{
        width: 121px;
        height: 33.869px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }


`