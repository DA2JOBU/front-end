import styled from "styled-components";

const InputStyled = styled.input`
  margin: 0;
  width: 100%;
  text-align: right;
  width: 324px;
  padding: 11px 0 8px 0;
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
  &::placeholder {
    color: ${({ theme }) => theme.color.gray40};
  }
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.orange};
  }
  &:focus + button > svg {
    stroke: ${({ theme }) => theme.color.orange};
  }
`;

const InputForm = () => {
  return (
    <div>

    </div>
  )
}

export default InputForm;