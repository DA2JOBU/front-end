import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from '@components/elements/keyword-button/people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const PlaceKinds = (props: Props) => {
  const { onChange, name } = props;
  return (
    <ButtonContainer>
      <BaseButton value="가본 곳" width="156px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton value="가고 싶은 곳" width="156px" height="52px" fontSize="16px" onClick={onChange} name={name} />
    </ButtonContainer>
  );
};

export default PlaceKinds;
