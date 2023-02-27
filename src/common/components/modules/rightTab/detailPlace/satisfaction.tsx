import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from '@components/elements/keyword-button/people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Satisfaction = (props: Props) => {
  const { onChange, name } = props;
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [state, setState] = useState('');

  const clickEvent = (val: string) => {
    setState(val);
    if (val === '5') {
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(false);
      setFive(true);
    }
    else if (val === '4') {
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(true);
      setFive(false);
    }
    else if (val === '3') {
      setOne(false);
      setTwo(false);
      setThree(true);
      setFour(false);
      setFive(false);
    }
    else if (val === '2') {
      setOne(false);
      setTwo(true);
      setThree(false);
      setFour(false);
      setFive(false);
    }
    else if (val === '1') {
      setOne(true);
      setTwo(false);
      setThree(false);
      setFour(false);
      setFive(false);
    }
  }
  return (
    <ButtonContainer>
      <BaseButton mClick={clickEvent} active={five} text='5' value="5" width="58px" height="58px" onClick={onChange} name={name} />
      <BaseButton mClick={clickEvent} active={four} text='4' value="4" width="58px" height="58px" onClick={onChange} name={name} />
      <BaseButton mClick={clickEvent} active={three} text='3' value="3" width="58px" height="58px" onClick={onChange} name={name} />
      <BaseButton mClick={clickEvent} active={two} text='2' value="2" width="58px" height="58px" onClick={onChange} name={name} />
      <BaseButton mClick={clickEvent} active={one} text='1' value="1" width="58px" height="58px" onClick={onChange} name={name} />
    </ButtonContainer>
  );
};

export default Satisfaction;
