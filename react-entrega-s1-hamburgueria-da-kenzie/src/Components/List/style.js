import styled from 'styled-components';

export const BoxResult = styled.div`
    display: flex;
    justify-content: center;
    
    p{
        font-weight: 700;
        font-size: 26px;
        line-height: 34px;
        color: #333333;

        margin-top: 10px;
        span{
            color: #828282;
        }
    }
`
export const ListMain = styled.ul`
    display: flex;
    overflow-x: auto;

    gap: 20px;
    margin: 0;
    padding: 20px;

    box-sizing: border-box;

    @media(min-width: 700px){
        justify-content: center;
        flex-wrap: wrap;
        
        height: 450px;
        overflow-y: auto;
    }
    @media(min-width: 1200px){
        height: 100%;
        flex-wrap: wrap;
        /* overflow-y: hidden; */
        /* width: ${({itens}) => itens.length < 4  ? '953px': ' 953px'}; */
        /* width: 989px; */
    }
`
