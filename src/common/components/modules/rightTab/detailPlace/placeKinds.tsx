import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from '@components/elements/keyword-button/people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const PlaceKinds = (props: Props) => {
  const { onChange, name } = props;
  const [went, setWent] = useState(false);
  const [want, setWant] = useState(false);
  const [state, setState] = useState('');
  const clickEvent = (val: string) => {
    setState(val);
    if (val === '가본 곳') {
      setWent(true);
      setWant(false);
    }
    else {
      setWent(false);
      setWant(true);
    }
  }
  return (
    <ButtonContainer>
      <BaseButton mClick={clickEvent} active={went} text='가본 곳' value="가본 곳" width="9.75rem" height="3.25rem" fontSize="1rem" onClick={onChange} name={name} />
      <BaseButton mClick={clickEvent} active={want} text='가고 싶은 곳' value="가고 싶은 곳" width="9.75rem" height="3.25rem" fontSize="1rem" onClick={onChange} name={name} />
    </ButtonContainer>
  );
};

export default PlaceKinds;
