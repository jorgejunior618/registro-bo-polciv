import styled from "styled-components";

export const FormContainer = styled.main`
  padding: 10px 40px;
  width: 100%;

  h1 {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  #register-button {
    margin-top: 30px;
  }
`;

export const InputContainer = styled.section`
  display: flex;
  align-items: flex-end;
  margin-top: 15px;

  &.radio-buttons {
    align-items: center;
  }
  
  .label-input {
    font-weight: 600;
    margin-right: 10px;
  }

  .MuiOutlinedInput-input {
    padding: 6px 10px 2px;
  }
`;

export const InputGroup = styled.section`
  display: flex;

  section + section {
    margin-left: 20px;
  }
`;
