import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from '@components/elements/keyword-button/people';

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  count?: number | undefined;
  value?: string;
  mood?: string;
}

//벨류인것만 카운트

const Atmosphere = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name, count, mood } = props;


  return (
    <ButtonContainer>
      <BaseButton
        text='가벼운'
        value="mood"
        width="6.4rem"
        height="52px"
        fontSize="16px"
        onClick={onChange}
        name={name}
        mood={mood}
      />
      <BaseButton text='일반적인' value="Nomal" width="6.4rem" height="52px" fontSize="16px" onClick={onChange} name={name} mood={mood}/>
      <BaseButton text='무거운' value="Heavy" width="6.4rem" height="52px" fontSize="16px" onClick={onChange} name={name} mood={mood}/>
    </ButtonContainer>
  );
};

export default Atmosphere;
