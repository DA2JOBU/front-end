import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from '@components/elements/keyword-button/people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Satisfaction = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name } = props;
  return (
    <ButtonContainer>
      <BaseButton text='5' value="5" width="58px" height="58px" onClick={onChange} name={name} />
      <BaseButton text='4' value="4" width="58px" height="58px" onClick={onChange} name={name} />
      <BaseButton text='3' value="3" width="58px" height="58px" onClick={onChange} name={name} />
      <BaseButton text='2' value="2" width="58px" height="58px" onClick={onChange} name={name} />
      <BaseButton text='1' value="1" width="58px" height="58px" onClick={onChange} name={name} />
    </ButtonContainer>
  );
};

export default Satisfaction;
