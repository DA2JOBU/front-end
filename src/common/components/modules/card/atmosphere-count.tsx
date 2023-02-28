import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from '@components/elements/keyword-button/people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  count?: number | undefined;
  value?: string;
}

//벨류인것만 카운트

const Atmosphere = (props: Props) => {
  const { onChange, name, count } = props;
  const [light, setLight] = useState(false);
  const [normal, setNormal] = useState(false);
  const [heavy, setHeavy] = useState(false);
  const [state, setState] = useState('');
  const clickEvent = (val: string) => {
    setState(val);
    if (val === 'mood') {
      setLight(true);
      setNormal(false);
      setHeavy(false);
    }
    else if (val === 'Nomal') {
      setLight(false);
      setNormal(true);
      setHeavy(false);
    }
    else if (val === 'Heavy') {
      setLight(false);
      setNormal(false);
      setHeavy(true);
    }
  }

  return (
    <ButtonContainer>
      <BaseButton
        mClick={clickEvent} active={light}
        text='가벼운'
        value="mood"
        width="6.4rem"
        height="52px"
        fontSize="16px"
        onClick={onChange}
        name={name}
        count={count}
      />
      <BaseButton mClick={clickEvent} active={normal} text='일반적인' value="Nomal" width="6.4rem" height="52px" fontSize="16px" onClick={onChange} name={name} count={count} />
      <BaseButton mClick={clickEvent} active={heavy} text='무거운' value="Heavy" width="6.4rem" height="52px" fontSize="16px" onClick={onChange} name={name} count={count} />
    </ButtonContainer>
  );
};

export default Atmosphere;
