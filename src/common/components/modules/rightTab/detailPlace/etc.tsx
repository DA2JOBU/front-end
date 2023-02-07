import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from '@components/elements/keyword-button/people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Etc = (props: Props) => {
  const { onChange } = props;
  return (
    <ButtonContainer>
      <BaseButton text='콜키지' value='콜키지' width="102px" height="52px" fontSize="16px" onClick={onChange} name='isCorkCharge' />
      <BaseButton text='룸' value="룸" width="102px" height="52px" fontSize="16px" onClick={onChange} name='isRoom' />
      <BaseButton text='선결제' value="선결제" width="102px" height="52px" fontSize="16px" onClick={onChange} name='isAdvancePayment' />
      <BaseButton text='예약필수' value="예약필수" width="102px" height="52px" fontSize="16px" onClick={onChange} name='isReservation' />
      <BaseButton text='주차가능' value="주차가능" width="102px" height="52px" fontSize="16px" onClick={onChange} name='isParking' />
      <BaseButton text='대관가능' value="대관가능" width="102px" height="52px" fontSize="16px" onClick={onChange} name='isRent' />
    </ButtonContainer>
  );
};

export default Etc;
