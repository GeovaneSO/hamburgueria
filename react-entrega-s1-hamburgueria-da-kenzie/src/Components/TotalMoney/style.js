import styled from 'styled-components';

export const ContainerTotal = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-top: 15px;
    padding: 15px;
    box-sizing: border-box;

    border-top: 2px solid #E0E0E0;
    div{
        display: flex;
        justify-content: space-between;

        p{
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
        }
        .total{
            color: #333333;
        }
        .price{     
            color: #828282;
        }
    }
    button{
        width: 100%;
        height: 60px;

        background: #E0E0E0;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        color: #828282;
    }
`
