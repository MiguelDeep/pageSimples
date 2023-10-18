import styled from "styled-components";

export const Links = styled.ul`
 list-style: none;
 >li {
    a{
        color:${({ theme }) => theme.COLORS.WHITE} 
    }
 }    
`;

export const Container = styled.div`  
width: 100%;
height: 100vh;
display: grid;
grid-template-rows:105px auto;
grid-template-areas: 
"header"
"content";

> main{
    grid-area:content ;
    overflow-y: scroll;
    padding: 64px 0;
}
`;



export const Content = styled.div`

max-width: 550px;
margin: 0 auto;

gap:10px ;
display: flex;
flex-direction: column;
text-align: justify;
>button:first-child{
    align-self: end;
}
>h1{
    font-size:36px;
    font-weight:500;
}

`;