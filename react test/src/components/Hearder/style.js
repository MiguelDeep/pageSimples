import styled from "styled-components";
import {RiShutDownLine} from "react-icons/ri";

export const ContainerHeader = styled.header`
    grid-area: header;
    width: 100%;
    height: 100px; 
     

     border-bottom-width: 1px ;
     border-bottom-style: solid ;
     border-bottom-color: ${({theme})=>theme.COLORS.BACKGROUND_700};

     display: flex;
     justify-content: space-between;
     padding: 0 80px;
`;

export const Profile=styled.div`
display: flex;
>img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 20px;
   margin-top: 20px;
}
>div{
    display: flex;
   flex-direction :column ;
   margin-left: 20px;
   margin-top: 27px;
   line-height: 24px;

   span{
    font-size:14px ;
    color:${({theme})=>theme.COLORS.GRAY_10};
   }
   strong{
    font-size:18px ;
    color:${({theme})=>{theme.COLORS.WHITE}};
   }
}
`;
export const Logout=styled.button`
border:none;
background: none;

>svg{
    color :${({theme})=>{theme.COLORS.GRAY_100}};
    font-size: 36px;
}
`; 