import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 70px;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border:0;
  padding: 0 16px;
  border-radius:10px ;
  font-weight: 500;

  &:disabled{
  opacity  :0.5 ;
  }
`;