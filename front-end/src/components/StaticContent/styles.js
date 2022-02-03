import styled from "styled-components";

export const MainContentWrapper = styled.section`
  display: flex;

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* justify-content: space-between; */
    height: 90vh;
    width: 65px;

    border-right: solid 2px ${({ theme }) => theme.secondary};

    li {
      
    }
  }
`;
