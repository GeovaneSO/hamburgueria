import styled from 'styled-components';

export const CardMain = styled.li`
    display: flex;
    flex-direction: column;
    /* gap: 15px; */

    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    width: 100%;
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
        gap: 15px;

        padding: 0 15px;

        margin: 15px 0;

        /* margin-bottom: 0; */
        p{
            margin: 0;
            width: max-content;
        }
        span{
            width: max-content;
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
