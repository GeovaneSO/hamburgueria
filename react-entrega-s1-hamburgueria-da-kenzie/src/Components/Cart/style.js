import styled from 'styled-components';

// export cosnt Cart = styled.div`
   
// `
export const TitleCart = styled.div`
    display: flex;

    background: #27AE60;
    border-radius: 5px 5px 0px 0px;

    /* padding: 0 60px; */
    width: 335px;
    h2{
       margin-left: 20px;
       color: white;

       font-size: 18px;
    }

`
export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 335px;

    margin: 0;
    padding: 0;

    background: #F5F5F5;
    border-radius: 0px 0px 5px 5px;

    .list__cart{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        gap: 15px;

        width: 335px;
        height: 200px;

        margin: 0;
        padding: 15px;
        box-sizing: border-box;
        
        overflow-y:auto;
    }
`
