import styled from "styled-components";

export const FormContainer = styled.main`
  padding: 10px 40px;
  width: 100%;

  h1 {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  button {
    margin-top: 50px;
  }
`;

export const InputContainer = styled.section`
  display: flex;
  align-items: flex-end;
  margin-top: 15px;
  
  & .label-input {
    font-weight: 600;
    margin-right: 10px;
  }

  & .MuiOutlinedInput-input {
    padding: 12px 12px 4px;

  }
  & #50pixels{
    width: 50px;
  }
  `;

export const InputGroup = styled.section`
  display: flex;

  section + section {
    margin-left: 20px;
  }
`;
