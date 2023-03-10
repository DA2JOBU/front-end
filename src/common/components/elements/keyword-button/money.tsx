import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from './people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const MoneyButton = (props: Props) => {
  const { onChange, name } = props;

  const [under3, setUnder3] = useState(false);
  const [under5, setUnder5] = useState(false);
  const [under10, setUnder10] = useState(false);
  const [up10, setUp10] = useState(false);
  const [state, setState] = useState('');
  const clickEvent = (val: string) => {
    setState(val);
    if (val === '3만 미만') {
      setUnder3(true);
      setUnder5(false);
      setUnder10(false);
      setUp10(false);
    }
    else if (val === '3만 이상 5만 미만') {
      setUnder3(false);
      setUnder5(true);
      setUnder10(false);
      setUp10(false);
    }
    else if (val === '5만 이상 10만 미만') {
      setUnder3(false);
      setUnder5(false);
      setUnder10(true);
      setUp10(false);
    }
    else if (val === '10만 이상') {
      setUnder3(false);
      setUnder5(false);
      setUnder10(false);
      setUp10(true);
    }
  }

  return (
    <ButtonContainer>
      <BaseButton mClick={clickEvent} active={under3} text='3만 미만' value="3만 미만" width="9.8rem" height="3.25rem" fontSize="1rem" onClick={onChange} name={name} />
      <BaseButton
        mClick={clickEvent} active={under5}
        text='3만 이상 5만 미만'
        value="3만 이상 5만 미만"
        width="9.8rem"
        height="3.25rem"
        fontSize="1rem"
        onClick={onChange}
        name={name}
      />
      <BaseButton
        mClick={clickEvent} active={under10}
        text='5만 이상 10만 미만'
        value="5만 이상 10만 미만"
        width="9.8rem"
        height="3.25rem"
        fontSize="1rem"
        onClick={onChange}
        name={name}
      />
      <BaseButton mClick={clickEvent} active={up10} text='10만 이상' value="10만 이상" width="9.8rem" height="3.25rem" fontSize="1rem" onClick={onChange} name={name} />
    </ButtonContainer>
  );
};

export default MoneyButton;
