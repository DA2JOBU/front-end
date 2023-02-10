import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const PeopleButton = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name } = props;
  return (
    <ButtonContainer>
      <BaseButton
        text="4~8명"
        value='4,8'
        width="9.8rem"
        height="52px"
        fontSize="16px"
        onClick={onChange}
        name={name}
      />
      <BaseButton
        text="9~12명"
        value="9,12"
        width="9.8rem"
        fontSize="16px"
        height="52px"
        onClick={onChange}
        name={name}
      />
      <BaseButton
        text="13~16명"
        value="13,16"
        width="9.8rem"
        fontSize="16px"
        height="52px"
        onClick={onChange}
        name={name}
      />
      <BaseButton
        text="17명 이상"
        value="17"
        width="9.8rem"
        fontSize="16px"
        height="52px"
        onClick={onChange}
        name={name}
      />
    </ButtonContainer>
  );
};

export default PeopleButton;
