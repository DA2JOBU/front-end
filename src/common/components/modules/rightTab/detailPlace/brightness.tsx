import React, { useState } from "react";
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from "@components/elements/keyword-button/people";

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  lighting?: string;
}

const Brightness = (props: Props) => {
  const { onChange, name, lighting } = props;

  const [bright, setBright] = useState(false);
  const [normal, setNormal] = useState(false);
  const [dark, setDark] = useState(false);
  const [state, setState] = useState('');
  const clickEvent = (val: string) => {
    setState(val);
    if (val === 'Light') {
      setBright(true);
      setNormal(false);
      setDark(false);
    }
    else if (val === 'Nomal') {
      setBright(false);
      setNormal(true);
      setDark(false);
    }
    else if (val === 'Dark') {
      setBright(false);
      setNormal(false);
      setDark(true);
    }
  }
  return (
    <ButtonContainer>
      <BaseButton
        mClick={clickEvent}
        active={bright}
        text='밝은'
        value="Light"
        width="6.4rem"
        height="52px"
        fontSize="16px"
        onClick={onChange}
        name={name}
        lighting={lighting}
      />
      <BaseButton
        mClick={clickEvent}
        active={normal}
        text='일반적인'
        value="Nomal"
        width="6.4rem"
        height="52px"
        fontSize="16px"
        onClick={onChange}
        name={name}
        lighting={lighting}
      />
      <BaseButton
        mClick={clickEvent}
        active={dark}
        text='어두운'
        value="Dark"
        width="6.4rem"
        height="52px"
        fontSize="16px"
        onClick={onChange}
        name={name}
        lighting={lighting}
      />
    </ButtonContainer>
  )
}

export default Brightness;