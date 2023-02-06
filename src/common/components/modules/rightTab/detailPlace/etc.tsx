import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from '@components/elements/keyword-button/people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Etc = (props: Props) => {
  const { onChange, name } = props;
  return (
    <ButtonContainer>
      <BaseButton value="콜키지" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton value="룸" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton value="선결제" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton value="예약 필수" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton value="주차 가능" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton value="대관 가능" width="104px" height="52px" fontSize="16px" onClick={onChange} name={name} />
    </ButtonContainer>
  );
};

export default Etc;
