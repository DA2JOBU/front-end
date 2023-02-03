import { type } from 'os';
import React, { useState } from 'react';
import styled from 'styled-components';
type ButtonSize = 'large' | 'medium' | 'small';

type ButtonProps = {
  size?: ButtonSize | undefined;
  disabled?: boolean;
  color?: string;
  text?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

interface Props {
  value?: string;
  name?: string;
  onClick?: (e: any) => void;
  width?: string;
  disabled?: boolean;
  className?: string;
  height?: string;
  active?: boolean;
}

const StyledButton = styled.button`
/*공통 스타일*/
display: inline-flex;
justify-content: center;
align-items: center;
outline: none;
text-align: center;
border-radius: 50px;
font-weight: 600;
cursor: pointer;
padding: 1rem;


/*크기*/
font-size: 0.8rem;

/*색상 */

background:  ${({ theme }) => theme.color.gray20};
color: ${({ theme }) => theme.color.gray70};

.disabled{

}
.active{
  background: ${({ theme }) => theme.color.white};
  color:  ${({ theme }) => theme.color.orange};
  border: 1px solid ${({ theme }) => theme.color.orange};
}

/*기타 */
& + & {
  margin-left: 0.5rem;
}
`;

const KeywordButton = ({ value, active, height, disabled, name, onClick, width }: Props) => {
  const [state, setState] = useState<boolean>(active || false);
  const onChange = () => {
    setState(!state);
    console.log(onClick);
    return onClick;
  }
  return (
    <StyledButton
      value={value}
      onClick={onClick}
      style={{
        width,
        height
      }}
      className={!state ? 'disabled' : 'active'}
      disabled={disabled}
      type='button'
      name={name}
    >
      {value}
    </StyledButton>
  );
};

export default KeywordButton;
