import styled from 'styled-components';

export const CardCartAdd = styled.li`
    display: flex;
    justify-content: space-between;

    width: 372px;
    height: 80px;

    margin: 0;
    padding: 0;

    box-sizing: border-box;

    list-style: none;

    .box{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;

    width: 190px;

        figure{
        width: 80px;
        height: 80px;
        
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        background: #E0E0E0;
        border-radius: 5px;

            img{
                width: 100%;
            }
        }
        .info{
            margin: 0;

            p{
                margin: 0;
            }
        }
    }
    .box__btn{
        button{
            margin: 0;
            padding: 0;
            border: none;
            background: transparent;
            width: max-content;
            height: max-content;
            border: none
        }
    }
`