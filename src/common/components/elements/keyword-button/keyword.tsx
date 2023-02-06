import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from './people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const KeywordButton = (props: Props) => {
  const { onChange, name } = props;
  return (
    <ButtonContainer>
      <BaseButton disabled value="가벼운" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton
        disabled
        value="일반적인"
        width="104px"
        height="52px"
        fontSize="16px"
        onClick={onChange}
        name={name}
      />
      <BaseButton disabled value="무거운" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
    </ButtonContainer>
  );
};

export default KeywordButton;
