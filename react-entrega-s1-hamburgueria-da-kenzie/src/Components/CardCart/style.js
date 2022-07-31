import styled from 'styled-components';

export const CardCartAdd = styled.li`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 80px;

    margin: 0;
    padding: 0;

    box-sizing: border-box;

    list-style: none;

    .box{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;

        width: 205px;

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
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            gap: 12px;
            height: 80px;

            margin: 0;
            margin-top: 12px;
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
        }
    }
    .box__btn{
        button{
            margin: 0;
            margin-top: 12px;
            padding: 0;
            border: none;
            background: transparent;
            width: max-content;
            height: max-content;
            border: none;

            font-weight: 500;
            font-size:12px;
            line-height: 15px;
            color: #BDBDBD;

        }
    }
`