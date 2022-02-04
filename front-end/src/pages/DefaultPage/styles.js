import styled from "styled-components";

export const PageWrapper = styled.main`
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1{
    color: ${({ theme }) => theme.secondary };
  }
`;