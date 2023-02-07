import React, { useState } from 'react';
import BaseButton from '@components/elements/keyword-button/base';
import { ButtonContainer } from '@components/elements/keyword-button/people';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  count?: number | undefined;
}

const Atmosphere = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const { onChange, name, count } = props;
  return (
    <ButtonContainer>
      <BaseButton
        text='가벼운'
        value="Light"
        width="6.4rem"
        height="52px"
        fontSize="16px"
        onClick={onChange}
        name={name}
        count={count}
      />
      <BaseButton text='일반적인' value="Nomal" width="6.4rem" height="52px" fontSize="16px" onClick={onChange} name={name} />
      <BaseButton text='무거운' value="Heavy" width="6.4rem" height="52px" fontSize="16px" onClick={onChange} name={name} />
    </ButtonContainer>
  );
};

export default Atmosphere;
