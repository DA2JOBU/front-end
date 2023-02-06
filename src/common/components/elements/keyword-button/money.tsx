import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from './people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const MoneyButton = (props: Props) => {
  const { onChange, name } = props;
  return (
    <ButtonContainer>
      <BaseButton value="3만 미만" width="156px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton value="3만 이상 5만 미만" width="156px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton value="5만 이상 10만 미만" width="156px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton value="10만 이상" width="156px" height="52px" fontSize="16px" onClick={onChange} name={name} />
    </ButtonContainer>
  );
};

export default MoneyButton;
