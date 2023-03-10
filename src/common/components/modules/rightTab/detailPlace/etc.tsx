import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from '@components/elements/keyword-button/people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Etc = (props: Props) => {
  const { onChange } = props;
  const [call, setCall] = useState(false);
  const [room, setRoom] = useState(false);
  const [pay, setPay] = useState(false);
  const [reservation, setReservation] = useState(false);
  const [park, setPark] = useState(false);
  const [lent, setLent] = useState(false);
  const [state, setState] = useState('');
  const clickEvent = (val: string) => {
    setState(val);
    if (val === '콜키지') {
      setCall(!call);
    }
    else if (val === '룸') {
      setRoom(!room);
    }
    else if (val === '선결제') {
      setPay(!pay);
    }
    else if (val === '예약필수') {
      setReservation(!reservation);
    }
    else if (val === '주차가능') {
      setPark(!park);
    }
    else if (val === '대관가능') {
      setLent(!lent);
    }
  }
  return (
    <ButtonContainer>
      <BaseButton mClick={clickEvent} active={call} text='콜키지' value='콜키지' width="6.375rem" height="3.25rem" fontSize="1rem" onClick={onChange} name='isCorkCharge' />
      <BaseButton mClick={clickEvent} active={room} text='룸' value="룸" width="6.375rem" height="3.25rem" fontSize="1rem" onClick={onChange} name='isRoom' />
      <BaseButton mClick={clickEvent} active={pay} text='선결제' value="선결제" width="6.375rem" height="3.25rem" fontSize="1rem" onClick={onChange} name='isAdvancePayment' />
      <BaseButton mClick={clickEvent} active={reservation} text='예약필수' value="예약필수" width="6.375rem" height="3.25rem" fontSize="1rem" onClick={onChange} name='isReservation' />
      <BaseButton mClick={clickEvent} active={park} text='주차가능' value="주차가능" width="6.375rem" height="3.25rem" fontSize="1rem" onClick={onChange} name='isParking' />
      <BaseButton mClick={clickEvent} active={lent} text='대관가능' value="대관가능" width="6.375rem" height="3.25rem" fontSize="1rem" onClick={onChange} name='isRent' />
    </ButtonContainer>
  );
};

export default Etc;
