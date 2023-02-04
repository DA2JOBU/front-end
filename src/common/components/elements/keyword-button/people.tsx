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
      <BaseButton value="4~8명" width="158px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton value="9~12명" width="158px" fontSize="16px" height="52px" onClick={onChange} name={name} />
      <BaseButton value="13~16명" width="158px" fontSize="16px" height="52px" onClick={onChange} name={name} />
      <BaseButton value="17명 이상" width="158px" fontSize="16px" height="52px" onClick={onChange} name={name} />
    </ButtonContainer>
  );
};

export default PeopleButton;
