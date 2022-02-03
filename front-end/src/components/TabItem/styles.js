import styled from "styled-components";

export const TabWrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  width: 65px;
  align-items: center;
  border: solid 1px ${({ theme }) => theme.secondary};
  border-radius: 10px 0 0 10px;
  margin-top: 2px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.background};
  
  &.active {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.defaultFont};
  }
`;
