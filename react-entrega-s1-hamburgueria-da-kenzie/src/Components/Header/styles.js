import styled from 'styled-components';

export const HeaderMain = styled.header`
    width: 100vw;

    margin: 0;
    padding: 0;

    box-sizing: border-box;

    background: #F5F5F5;
    .container{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        gap: 10px;


        width: 100%;

        margin: 0;
        padding: 20px;
        box-sizing: border-box;

        margin: 0 auto;
        figure{
            margin: 0;
        }
        .box__search{
            display: flex;
            /* flex-direction: column; */
            justify-content: space-between;
            align-items: center;
            width: 95%;
            height: 45px;

            padding: 5px;

            background: #FFFFFF;

            border: 2px solid #E0E0E0;
            border-radius: 8px;

            input{
                padding: 15px;

                width: 50%;

                border: none;
            }
            input:focus{
                border: none;
            }
            input:active{
                border: none;
            }
            button{
                background: #27AE60;
                width: 107px;
                height: 40px;   

                border: 2px solid #27AE60;
                border-radius: 8px;           

                margin: 0;

                color: white;
            }
        }
    }

    @media(min-width: 500px){
        .container{
            flex-direction: row;
            padding: 20px 20px;


            .box__search{
            width: 275px;

            }

        }
    }
    @media(min-width: 650px){
        .container{
            flex-direction: row;
            padding: 20px 40px;


            .box__search{
            width: 275px;

            }

        }
    }
`


