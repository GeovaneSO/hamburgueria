import styled from 'styled-components';

export const CardMain = styled.li`
    display: flex;
    flex-direction: column;
    /* gap: 15px; */

    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    width: 254px;
    height: 320px;

    background: #FFFFFF;

    border: 2px solid #E0E0E0;
    border-radius: 5px;

    figure{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        width: 250px;
        height: 150px;
        background: #F5F5F5;

        img{
            height: 150px;
            overflow: hidden;
        }
    }
    .info{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 12px;
        height: 80px;

        padding: 0 15px;
        margin: 15px 0;

        p{
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;

            text-overflow: ellipsis;
            max-width: 12ch;
            overflow: hidden;
            white-space: nowrap;


            color: #333333;
            margin: 0;
        }
        span{
            font-size: 12px;
            line-height: 16px;
            color: #828282;
        }
        .price{
            color: #27AE60;
        }
    }

    button{
        height: 30px;
        width: 100px;

        margin: 0 15px;

        background: #27AE60;

        border: 2px solid #27AE60;
        border-radius: 8px;

        color: white;
    }
`
